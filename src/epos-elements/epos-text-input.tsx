import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";


export interface EposTextInputProps extends BaseWidgetProps {
    classList?:string[];
    onChange?:any;
    placeholder?:string;
    type:string;
}


export interface EposTextInputState {}


export class EposTextInputElement extends BaseWidget<EposTextInputProps, EposTextInputState> {
    constructor(props: EposTextInputProps) {
        super("selection-grid", props);
        this.state = {};
    }
    

    render() {
        let classList = ['epos-text-input'];
        if(this.props.classList){
            classList = [...classList,...this.props.classList];
        }
        
        
        return (
            <input className={classList.join('')} type={this.props.type} onChange={this.props.onChange} placeholder={this.props.placeholder}/>
        )
    }
}