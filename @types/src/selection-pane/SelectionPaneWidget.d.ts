/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface SelectionPaneProps extends BaseWidgetProps {
}
export interface SelectionPaneState {
    document: any;
}
export declare class SelectionPaneWidget extends BaseWidget<SelectionPaneProps, SelectionPaneState> {
    constructor(props: SelectionPaneProps);
    render(): JSX.Element;
}
