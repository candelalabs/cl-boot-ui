/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../../common/BaseWidget";
export interface EposDetailsDropdownProps extends BaseWidgetProps {
    classList?: string[];
    onClick?: any;
    placeholder?: string;
    label: string;
    list: Array<string>;
}
export interface EposDetailsDropdownState {
    open: boolean;
    value: string;
}
export declare class EposDetailsDropdownElement extends BaseWidget<EposDetailsDropdownProps, EposDetailsDropdownState> {
    node: any;
    constructor(props: EposDetailsDropdownProps);
    outsideClick: (e: any) => void;
    onItemClick: (event: any, item: any) => void;
    onClick: (event: any, value?: any) => void;
    render(): JSX.Element;
}
