/// <reference types="react" />
import { BaseWidget } from "../common/BaseWidget";
import TouchRipple from "../ripple/TouchRipple";
export declare class Expander extends BaseWidget<any, any> {
    ripple: TouchRipple;
    constructor(props: any);
    render(): JSX.Element;
}
