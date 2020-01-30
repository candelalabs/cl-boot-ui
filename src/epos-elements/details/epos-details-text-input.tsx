import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../../common/BaseWidget";


export interface EposDetailsTextInputProps extends BaseWidgetProps {
    classList?:string[];
    onChange?:any;
    onBlur?:any;
    label:string;
    type:string;
    placeholder?:string;
}


export interface EposDetailsTextInputState {}


export class EposDetailsTextInputElement extends BaseWidget<EposDetailsTextInputProps, EposDetailsTextInputState> {
    constructor(props: EposDetailsTextInputProps) {
        super("selection-grid", props);
        this.state = {};
    }


    render() {
        let classList = ['epos-details-text-input'];
        if(this.props.classList){
            classList = [...classList,...this.props.classList];
        }


        return (
            <div className={classList.join(' ')}>
                <label>{this.props.label}</label>
                <input type={this.props.type} 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChange} 
                    onBlur={this.props.onBlur}/>
            </div>
        )
    }
}