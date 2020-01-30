/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface DialogProps extends BaseWidgetProps {
}
export interface DialogState {
}
export declare class Dialog extends BaseWidget<any, any> {
    constructor(props: any);
    render(): JSX.Element;
}
