import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import classNames from "classnames";

export interface SelectionPaneProps extends BaseWidgetProps {
}

export interface SelectionPaneState {
	document: any;
}

export class SelectionPaneWidget extends BaseWidget<any, any> {
	constructor(props: any) {
		super("selection-pane", props);
		this.state = {
			selectedIndex: 0
		};
	}

	render() {
		return (
			<div className="selection-pane-container">
				{
					this.props.data.map((item, index)=>{
						return (
							<button 
							className={classNames("selection-button", this.state.selectedIndex===index?"selected":"")}
							onClick={()=>{
								this.setState({selectedIndex: index});
							}}
							>{item.title}</button>
						)
					})
				}
			</div>
		)
	}
}