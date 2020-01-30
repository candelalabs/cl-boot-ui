/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface SliderProps extends BaseWidgetProps {
}
export interface SliderState {
}
export declare class Slider extends BaseWidget<any, any> {
    constructor(props: any);
    render(): JSX.Element;
}
