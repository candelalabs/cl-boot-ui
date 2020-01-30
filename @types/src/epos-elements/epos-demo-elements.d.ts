/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface EposDemoElementsProps extends BaseWidgetProps {
    classList?: string[];
    onClick?: any;
}
export interface EposDemoElementsState {
}
export declare class EposDemoElements extends BaseWidget<EposDemoElementsProps, EposDemoElementsState> {
    constructor(props: EposDemoElementsProps);
    render(): JSX.Element;
}
