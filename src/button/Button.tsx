import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import TouchRipple from "../ripple/TouchRipple";

export interface ButtonProps extends BaseWidgetProps {
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
			<button className="cl-button-root" 
			onMouseDown={(event)=>{
				this.ripple.start(event);
			}} 
			onMouseUp={(event)=>{
				this.ripple.stop(event, ()=>{});
			}}>
				<span className="cl-button-label">Default</span>
				<TouchRipple ref={(ref)=>{this.ripple = ref}} center={false} />
			</button>
		)
	}
}