/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface LoginDetail extends BaseWidgetProps {
    icon: string;
}
export interface State {
}
export declare class LoginDetails extends BaseWidget<LoginDetail, State> {
    constructor(props: LoginDetail);
    render(): JSX.Element;
}
