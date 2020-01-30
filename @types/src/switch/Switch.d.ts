/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface SwitchProps extends BaseWidgetProps {
}
export interface SwitchState {
}
export declare class Switch extends BaseWidget<any, SwitchState> {
    constructor(props: any);
    render(): JSX.Element;
}
