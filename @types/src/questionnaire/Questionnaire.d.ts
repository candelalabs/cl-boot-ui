/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
export interface QuestionnaireProps extends BaseWidgetProps {
}
export interface QuestionnaireState {
}
export declare class Questionnaire extends BaseWidget<any, any> {
    constructor(props: any);
    render(): JSX.Element;
}
