/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../../common/BaseWidget";
export interface EposRadioProps extends BaseWidgetProps {
    classList?: string[];
    onClick?: any;
}
export interface EposRadioState {
}
export declare class EposRadioElement extends BaseWidget<EposRadioProps, EposRadioState> {
    constructor(props: EposRadioProps);
    render(): JSX.Element;
}
