/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import TouchRipple from "../ripple/TouchRipple";
export interface ButtonProps extends BaseWidgetProps {
    label: string;
    onClick?: any;
}
export interface ButtonState {
    document: any;
}
export declare class Button extends BaseWidget<ButtonProps, ButtonState> {
    ripple: TouchRipple;
    constructor(props: ButtonProps);
    render(): JSX.Element;
}
