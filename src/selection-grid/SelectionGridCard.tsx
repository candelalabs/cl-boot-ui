import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import { Toolkit } from "../Toolkit";
import { BaseMouseAction } from "../common/actions/BaseMouseAction";
import { SelectionGridItem } from "./SelectionGridWidget";
import Svg from "../svg-image/Svg";

export interface SelectionGridCardProps extends BaseWidgetProps {
	item: SelectionGridItem,
	style?: any
}

export interface SelectionGridCardState {
}

export default class SelectionGridCard extends BaseWidget<SelectionGridCardProps, SelectionGridCardState> {

	constructor(props: SelectionGridCardProps) {
		super("selection-grid-card", props);
		this.state = {
		};
	}

	render() {
		let { item, style } = this.props;
		if(item.selected) {
			return (
				<div className={"selection-grid-card selected"} data-id={item.id} style={style}>
					<img src="img/group-11.svg" className="edit-image nodrag"/>
					<img src="img/group-12.svg" className="delete-image nodrag"/>
					<span className="item-amount">{item.amount}</span>
					<Svg url={item.imageSrc} className="item-image nodrag"/>
					<span className="item-title">{item.title}</span>
				</div>
			)
		} else {
			return (
				<div className={"selection-grid-card"} data-id={item.id} style={style}>
					<img src={item.imageSrc} className="item-image nodrag"/>
					<br/>
					<label className="item-title">{item.title}</label>
				</div>
			)
		}
	}
}