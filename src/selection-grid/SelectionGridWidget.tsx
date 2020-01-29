import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import { Toolkit } from "../Toolkit";
import { BaseMouseAction } from "../common/actions/BaseMouseAction";

import SelectionGridCard from "./SelectionGridCard";

export interface SelectionGridItem {
	id?: string,
	imageSrc: string,
	title: string,
	amount?: string,
	moved?: boolean,
	initialX?: number,
	initialY?: number,
	moveX?: number,
	moveY?: number,
	selected?: boolean
}

export interface SelectionGridProps extends BaseWidgetProps {
	data: Array<SelectionGridItem>
}

export interface SelectionGridSelected {
	index: number,
	item: SelectionGridItem
}

export interface SelectionGridState {
	document: any,
	isMoving: boolean,
	action?: BaseMouseAction,
	moveInfo?: any,
	hoverSelect?: boolean,
	selected: Array<SelectionGridSelected>,
	placeholders: Array<string>
}

export class SelectionGridWidget extends BaseWidget<SelectionGridProps, SelectionGridState> {
	parentRef: any;
	selectedParentRef: any;

	constructor(props: SelectionGridProps) {
		super("selection-grid", props);
		this.state = {
			document: null,
			isMoving: false,
			data: props.data?props.data.map(item=>{
				item.id = Toolkit.UID();
				return item;
			}):[],
			action: null,
			moveInfo: null,
			hoverSelect: false,
			selected: [],
			placeholders: ["01", "02", "03", "04", "05", "06"]
		};
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
	}

	componentDidMount() {
		this.setState({
			document: document
		});
	}

	getMouseElement(event): { item: SelectionGridItem; element: Element } {
		var target = event.target as Element;

		var element = Toolkit.closest(target, ".selection-grid-card");
		if (element) {
			return {
				item: _.find(this.props.data, {id: element.getAttribute("data-id")}) as SelectionGridItem, // TODO: need id to compare
				element
			}
		}
		return null;
	}

	onMouseMove(event) {
		let amountX = event.clientX - this.state.action.mouseX;
		let amountY = event.clientY - this.state.action.mouseY;
		this.state.moveInfo.item.moveX = this.state.moveInfo.item.initialX + amountX;
		this.state.moveInfo.item.moveY = this.state.moveInfo.item.initialY + amountY;
		let selRect = this.selectedParentRef.getBoundingClientRect();
		let isMouseIntersectSelParent = false;
		if(
			event.clientX >= selRect.left && event.clientY >= selRect.top && 
			event.clientX <= selRect.left + selRect.width && event.clientY <= selRect.top + selRect.height
		) {
			isMouseIntersectSelParent = true;
		}
		this.setState({hoverSelect: isMouseIntersectSelParent});
	}

	onMouseUp(event) {
		this.state.moveInfo.item.moved = false;
		this.state.document.removeEventListener("mousemove", this.onMouseMove);
		this.state.document.removeEventListener("mouseup", this.onMouseUp);
		if(this.state.hoverSelect) {
			this.state.moveInfo.item.selected = true;
			let minimumIndex = 0;
			this.state.selected.forEach(sel=>{
				if(minimumIndex <= sel.index) {
					minimumIndex = sel.index + 1;
				}
			});
			this.state.selected.push({
				index: minimumIndex,
				item: this.state.moveInfo.item
			});
		}
		this.setState({
			isMoving: false,
			action: null,
			moveInfo: null,
			hoverSelect: false
		});
	}

	render() {
		return (
			<div 
				className="selection-grid-container" 
				ref={ref => {
					if (ref) {
						this.parentRef = ref;
					}
				}}
				// onMouseDown={event => {
				// 	if(event.nativeEvent.which !== 1 || this.state.isMoving) return;
				// 	let result = this.getMouseElement(event);
				// 	console.log(result);
				// 	if(result !== null) {
				// 		let parentRect = this.parentRef.getBoundingClientRect();
				// 		let cardRect = result.element.getBoundingClientRect();
				// 		result.item.moveX = result.item.initialX = cardRect.left - parentRect.left;
				// 		result.item.moveY = result.item.initialY = cardRect.top - parentRect.top;
				// 		result.item.moved = true;
				// 		this.setState({
				// 			isMoving: true,
				// 			action: new BaseMouseAction(event.clientX, event.clientY),
				// 			moveInfo: result
				// 		})
				// 		this.state.document.addEventListener("mousemove", this.onMouseMove);
				// 		this.state.document.addEventListener("mouseup", this.onMouseUp);
				// 	}
				// }}
			>
				<div className="selection-grid-menu-title">Select your needs in order of priority</div>
				<div className="selection-grid-menu">
					{
						this.props.data.map((item)=>{
							if(item.moved || item.selected) return null;
							return (
								<SelectionGridCard item={item} onClick={()=>{
									item.selected = true;
									let minimumIndex = 0;
									this.state.selected.forEach(sel=>{
										if(minimumIndex <= sel.index) {
											minimumIndex = sel.index + 1;
										}
									});
									this.state.selected.push({
										index: minimumIndex,
										item: item
									});
									this.setState({});
								}} />
							)
						})
					}
				</div>
				<div className="selection-grid-selected-title">Selected Needs</div>
				<div className={"selection-grid-selected" + (this.state.hoverSelect?" hover":"")}
					ref={ref => {
						if (ref) {
							this.selectedParentRef = ref;
						}
					}}
				>
					{
						this.state.placeholders.map((title, index)=>{
							if(index < this.state.selected.length) {
								let item = this.state.selected[index].item;
								return (
									<SelectionGridCard item={item} onDeleteClick={()=>{
										item.selected = false;
										_.remove(this.state.selected, {item: item});
										this.setState({});
									}} />
								);
							} else {
								return (
									<div className="selection-grid-placeholder"><label>{title}</label></div>
								);
							} 
						})
					}
				</div>
				{
					this.props.data.map((item)=>{
						if(!item.moved) return null;
						else return (
							<SelectionGridCard item={item} style={{
								position: "absolute",
								left: item.moveX,
								top: item.moveY,
							}}/>
						)
					})
				}
			</div>
		)
	}
}