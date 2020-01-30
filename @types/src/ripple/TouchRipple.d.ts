/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export declare const DELAY_RIPPLE = 80;
export interface TouchRippleProps extends BaseWidgetProps {
    center: boolean;
}
export interface TouchRippleState {
    ripples: Array<any>;
    nextKey: number;
}
export default class TouchRipple extends BaseWidget<TouchRippleProps, TouchRippleState> {
    startTimer: number;
    ignoringMouseDown: boolean;
    startTimerCommit: Function;
    constructor(props: TouchRippleProps);
    componentWillUnmount(): void;
    pulsate: () => void;
    start: (event?: any, options?: any, cb?: any) => void;
    startCommit: (params: any) => void;
    stop: (event: any, cb: any) => void;
    render(): JSX.Element;
}
