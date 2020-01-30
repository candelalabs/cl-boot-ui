import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../../common/BaseWidget";


export interface EposRadioProps extends BaseWidgetProps {
    classList?:string[];
    onClick?:any;
}


export interface EposRadioState {}


export class EposRadioElement extends BaseWidget<EposRadioProps, EposRadioState> {
    constructor(props: EposRadioProps) {
        super("selection-grid", props);
        this.state = {};
    }


    render() {
        let classList = ['epos-button'];
        if(this.props.classList){
            classList = [...classList,...this.props.classList];
        }


        return (
            <div>
                Hello world
            </div>
        )
    }
}