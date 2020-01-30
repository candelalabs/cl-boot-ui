import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import TouchRipple from "../ripple/TouchRipple";
import classNames from "classnames";

export interface ButtonProps extends BaseWidgetProps {
	label: string,
	onClick?: any
}

export interface ButtonState {
	document: any;
}

export class Button extends BaseWidget<ButtonProps, ButtonState> {
	ripple: TouchRipple;

	constructor(props: ButtonProps) {
		super("button", props);
		this.state = {
			document: null
		};
	}

	render() {
		return (
			<button className={classNames("cl-button-root", this.props.className)} 
			onMouseDown={(event)=>{
				this.ripple.start(event);
			}} 
			onMouseUp={(event)=>{
				this.ripple.stop(event, ()=>{});
			}}
			onClick={this.props.onClick}
			>
				<span className="cl-button-label">{this.props.label}</span>
				<TouchRipple ref={(ref)=>{this.ripple = ref}} center={false} />
			</button>
		)
	}
}