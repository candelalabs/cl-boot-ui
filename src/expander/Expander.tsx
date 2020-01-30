import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import TouchRipple from "../ripple/TouchRipple";
import { CSSTransition } from 'react-transition-group';
import classNames from "classnames";

export class Expander extends BaseWidget<any, any> {
	ripple: TouchRipple;

	constructor(props: any) {
		super("expander", props);
		this.state = {
			expanded: false
		};
	}

	render() {
		const {expanded} = this.state;
		return (
			<div className={classNames("cl-expander", expanded?"expanded":"")}>
				<button className="cl-expander-button" onClick={()=>{this.setState({expanded: !this.state.expanded})}}>
					<div className="plus-icon">+</div>
					<span>Detailed Analysis</span>
				</button>
				<CSSTransition in={expanded} timeout={200} classNames="cl-expander-transition" unmountOnExit>
					<div className="cl-expander-content">
						{this.props.children}
					</div>
				</CSSTransition>
			</div>
		)
	}
}