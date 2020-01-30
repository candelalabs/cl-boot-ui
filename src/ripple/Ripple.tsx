import * as React from "react";
import * as PropTypes from "prop-types";
import { InferProps } from "prop-types";
import * as _ from "lodash";
import clsx from 'clsx';
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

export const RipplePropTypes = {
	/**
	 * Override or extend the styles applied to the component.
	 * See [CSS API](#css-api) below for more details.
	 */
	classes: PropTypes.object.isRequired,
	/**
	 * @ignore
	 */
	className: PropTypes.string,
	/**
	 * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
	 */
	pulsate: PropTypes.bool,
	/**
	 * Diameter of the ripple.
	 */
	rippleSize: PropTypes.number,
	/**
	 * Horizontal position of the ripple center.
	 */
	rippleX: PropTypes.number,
	/**
	 * Vertical position of the ripple center.
	 */
	rippleY: PropTypes.number,
};

export interface RippleState {
	visible: boolean,
	leaving: boolean
}

class Ripple extends BaseWidget<InferProps<typeof RipplePropTypes>, any> {

	static propTypes = RipplePropTypes;

	static defaultProps = {
		pulsate: false,
	}

	constructor(props: InferProps<typeof RipplePropTypes>) {
		super("ripple", props);
		this.state = {
			visible: false,
			leaving: false
		}
	}

	handleEnter = () => {
		this.setState({
			visible: true,
		});
	};

	handleExit = () => {
		this.setState({
			leaving: true,
		});
	};

	render() {
		const {
			className: classNameProp,
			pulsate,
			rippleX,
			rippleY,
			rippleSize,
			...other
		} = this.props;
		const { visible, leaving } = this.state;

		const rippleClassName = classNames(
			"cl-touch-ripple-ripple",
			{
				"cl-touch-ripple-rippleVisible": visible,
				"cl-touch-ripple-ripplePulsate": pulsate,
			},
			classNameProp,
		);

		const rippleStyles = {
			width: rippleSize,
			height: rippleSize,
			top: -(rippleSize / 2) + rippleY,
			left: -(rippleSize / 2) + rippleX,
		};

		const childClassName = classNames("cl-touch-ripple-child", {
			"cl-touch-ripple-childLeaving": leaving,
			"cl-touch-ripple-childPulsate": pulsate,
		});

		return (
			// @ts-ignore timeout
			<Transition onEnter={this.handleEnter} onExit={this.handleExit} {...other}>
				<span className={rippleClassName} style={rippleStyles}>
					<span className={childClassName} />
				</span>
			</Transition>
		);
	}
}

export default Ripple;