import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";

import {EposButtonElement} from '../epos-elements/epos-button';
import {EposTextInputElement} from '../epos-elements/epos-text-input';


export interface LoginProps extends BaseWidgetProps {
    icon:string;
}

export interface LoginState {
    document: any;
}

export class LoginWidget extends BaseWidget<any, any> {
    constructor(props: LoginProps) {
        super("selection-grid", props);
        this.state = {
            document: null
        };
    }

    render() {
        return (

            <div className="outer">
                <div className="middle">
                    <div className="inner">
                       {
                           this.props.children
                       }
                    </div>
                </div>
            </div>

        )
    }
}