import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";

export interface SelectionPaneProps extends BaseWidgetProps {
}

export interface SelectionPaneState {
	document: any;
}

export class SelectionPaneWidget extends BaseWidget<SelectionPaneProps, SelectionPaneState> {
	constructor(props: SelectionPaneProps) {
		super("selection-grid", props);
		this.state = {
			document: null
		};
	}

	render() {
		return (
			<div className="selection-pane-container">
				<button className="selection-button">Conservative</button>
				<button className="selection-button">Moderately conservative</button>
				<button className="selection-button">Moderately aggressive</button>
				<button className="selection-button">Aggressive</button>
			</div>
		)
	}
}