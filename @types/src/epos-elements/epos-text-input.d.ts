/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface EposTextInputProps extends BaseWidgetProps {
    classList?: string[];
    onChange?: any;
    placeholder?: string;
    type: string;
}
export interface EposTextInputState {
}
export declare class EposTextInputElement extends BaseWidget<EposTextInputProps, EposTextInputState> {
    constructor(props: EposTextInputProps);
    render(): JSX.Element;
}
