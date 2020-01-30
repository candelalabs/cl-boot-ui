import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import clsx from 'clsx';
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import { TransitionGroup } from 'react-transition-group';
import Ripple from "./Ripple";

const DURATION = 550;
export const DELAY_RIPPLE = 80;

export interface TouchRippleProps extends BaseWidgetProps {
	center: boolean
}

export interface TouchRippleState {
	ripples: Array<any>,
	nextKey: number
}

export default class TouchRipple extends BaseWidget<TouchRippleProps, TouchRippleState> {
	startTimer: number;
	ignoringMouseDown: boolean;
	startTimerCommit: Function;

	constructor(props: TouchRippleProps) {
		super("touch-ripple", props);
		this.state = {
			nextKey: 0,
			ripples: []
		}
	}

	componentWillUnmount() {
		clearTimeout(this.startTimer);
	}

	pulsate = () => {
		this.start({}, { pulsate: true });
	};

	start = (event:any = {}, options:any = {}, cb?) => {
		const {
			pulsate = false,
			center = this.props.center || options.pulsate,
			fakeElement = false, // For test purposes
		} = options;

		if (event.type === 'mousedown' && this.ignoringMouseDown) {
			this.ignoringMouseDown = false;
			return;
		}

		if (event.type === 'touchstart') {
			this.ignoringMouseDown = true;
		}

		const element = fakeElement ? null : ReactDOM.findDOMNode(this);
		const rect = element
			? element.getBoundingClientRect()
			: {
				width: 0,
				height: 0,
				left: 0,
				top: 0,
			};

		// Get the size of the ripple
		let rippleX;
		let rippleY;
		let rippleSize;

		if (
			center ||
			(event.clientX === 0 && event.clientY === 0) ||
			(!event.clientX && !event.touches)
		) {
			rippleX = Math.round(rect.width / 2);
			rippleY = Math.round(rect.height / 2);
		} else {
			const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
			const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
			rippleX = Math.round(clientX - rect.left);
			rippleY = Math.round(clientY - rect.top);
		}

		if (center) {
			rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

			// For some reason the animation is broken on Mobile Chrome if the size if even.
			if (rippleSize % 2 === 0) {
				rippleSize += 1;
			}
		} else {
			const sizeX =
				Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
			const sizeY =
				Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
			rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
		}

		// Touche devices
		if (event.touches) {
			// Prepare the ripple effect.
			this.startTimerCommit = () => {
				this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
			};
			// Delay the execution of the ripple effect.
			this.startTimer = window.setTimeout(() => {
				if (this.startTimerCommit) {
					this.startTimerCommit();
					this.startTimerCommit = null;
				}
			}, DELAY_RIPPLE); // We have to make a tradeoff with this value.
		} else {
			this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
		}
	};

	startCommit = params => {
		const { pulsate, rippleX, rippleY, rippleSize, cb } = params;

		this.setState(
			state => ({
				nextKey: state.nextKey + 1,
				ripples: [
					...state.ripples,
					<Ripple
						key={state.nextKey}
						timeout={{
							exit: DURATION,
							enter: DURATION,
						}}
						pulsate={pulsate}
						rippleX={rippleX}
						rippleY={rippleY}
						rippleSize={rippleSize}
					/>,
				],
			}),
			cb,
		);
	};

	stop = (event, cb) => {
		clearTimeout(this.startTimer);
		const { ripples } = this.state;

		// The touch interaction occurs too quickly.
		// We still want to show ripple effect.
		if (event.type === 'touchend' && this.startTimerCommit) {
			event.persist();
			this.startTimerCommit();
			this.startTimerCommit = null;
			this.startTimer = window.setTimeout(() => {
				this.stop(event, cb);
			});
			return;
		}

		this.startTimerCommit = null;

		if (ripples && ripples.length) {
			this.setState(
				{
					ripples: ripples.slice(1),
				},
				cb,
			);
		}
	};

	render() {
		const { } = this.props;
		const { ripples } = this.state;
		return (
			<span className="cl-touch-ripple-root">
				<TransitionGroup component={null} exit>
					{ripples}
				</TransitionGroup>
			</span>
		)
	}
}