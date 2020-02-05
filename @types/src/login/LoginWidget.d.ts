/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface LoginProps extends BaseWidgetProps {
    icon: string;
}
export interface LoginState {
    document: any;
}
export declare class LoginWidget extends BaseWidget<any, any> {
    constructor(props: LoginProps);
    render(): JSX.Element;
}
