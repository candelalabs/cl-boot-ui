/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface EposButtonProps extends BaseWidgetProps {
    classList?: string[];
    onClick?: any;
}
export interface EposButtonState {
}
export declare class EposButtonElement extends BaseWidget<EposButtonProps, EposButtonState> {
    constructor(props: EposButtonProps);
    render(): JSX.Element;
}
