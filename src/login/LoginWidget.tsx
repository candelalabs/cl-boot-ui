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

export class LoginWidget extends BaseWidget<LoginProps, LoginState> {
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
                        <div className="login-section">
                            <div className="candela-icon">
                                <img src={this.props.icon} alt="Logo" />
                                <div className="custom-text-input"  >
                                    <EposTextInputElement type="text" placeholder="User Name" />
                                </div>
                                <div className="custom-text-input"  >
                                    <EposTextInputElement type="password" placeholder="Password" />
                                </div>                                
                                <div className="custom-submit-button" style={{
                                    marginTop: '60px'
                                }} >
                                    <button>
                                        Login
                                    </button>
                                </div>
                                <div className="forgot-password">
                                    Forgot Password? <a style={{
                                        textDecoration: 'none'
                                    }} href="#" >click here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}