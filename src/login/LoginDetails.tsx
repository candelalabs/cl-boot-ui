import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";


export interface LoginDetail extends BaseWidgetProps {
    icon: string;
}


export interface State { }


export class LoginDetails extends BaseWidget<LoginDetail, State> {
    constructor(props: LoginDetail) {
        super("selection-grid", props);
        this.state = {};
    }


    render() {

        return (
            <div>
                <div className="login-section">
                    <div className="candela-icon">
                        <img src={this.props.icon} alt="Logo" />
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}