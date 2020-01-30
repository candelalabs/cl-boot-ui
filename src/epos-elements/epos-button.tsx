import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";

export interface EposButtonProps extends BaseWidgetProps {
    classList?:string[];
    onClick?:any;

}

export interface EposButtonState {

}

export class EposButtonElement extends BaseWidget<EposButtonProps, EposButtonState> {
    constructor(props: EposButtonProps) {
        super("selection-grid", props);
        this.state = {
        };
    }

    render() {
        let classList = ['epos-button'];
        if(this.props.classList){
            classList = [...classList,...this.props.classList];
        }
        
        return (
            <button className={classList.join(' ')} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}
