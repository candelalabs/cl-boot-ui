import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";

import {EposButtonElement} from './epos-button';
import { EposTextInputElement} from './epos-text-input';
import {EposDetailsTextInputElement} from './details/epos-details-text-input';
import {EposDetailsDropdownElement} from './details/epos-details-dropdown';
import {EposRadioElement} from './details/epos-details-radio';



export interface EposDemoElementsProps extends BaseWidgetProps {
    classList?:string[];
    onClick?:any;
}


export interface EposDemoElementsState {

}


export class EposDemoElements extends BaseWidget<EposDemoElementsProps, EposDemoElementsState> {
    constructor(props: EposDemoElementsProps) {
        super("selection-grid", props);
        this.state = {};
    }


    render() {
        return (
            <div style={{
                background:'white',
                height:'100%'
            }}>
                <div className="epos-gap">
                    <EposButtonElement>
                        Example
                    </EposButtonElement>
                </div>
                <div className="epos-gap">
                    <EposTextInputElement type="text" placeholder="User Name"/>
                </div>
                <div className="epos-gap">
                    <EposDetailsTextInputElement type="text"  label="Name"/>
                </div>
                <div className="epos-gap">
                    <EposDetailsDropdownElement  label="Title" placeholder="Choose Title" list={
                        ['Mr','Mrs']
                    }/>
                </div>
                <div className="epos-gap">
                    <EposDetailsDropdownElement  label="Title" placeholder="Choose Title" list={
                        ['Mr','Mrs']
                    }/>
                </div>
                <div className="epos-gap">
                    <EposRadioElement  />
                </div>

            </div>
        )
    }
}