/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../../common/BaseWidget";
export interface EposDetailsTextInputProps extends BaseWidgetProps {
    classList?: string[];
    onChange?: any;
    onBlur?: any;
    label: string;
    type: string;
    placeholder?: string;
}
export interface EposDetailsTextInputState {
}
export declare class EposDetailsTextInputElement extends BaseWidget<EposDetailsTextInputProps, EposDetailsTextInputState> {
    constructor(props: EposDetailsTextInputProps);
    render(): JSX.Element;
}
