// import {
//     LoginWidget
// } from "cl-boot-ui";
// import * as React from "react";

// export default () => {
//     return <LoginWidget icon='img/candela_icon.jpg'/>;
// };

import {
    Button, LoginWidget, LoginDetails, EposTextInputElement
} from "cl-boot-ui";
import * as React from "react";


class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <LoginWidget >
                    <LoginDetails icon='img/candela_icon.jpg'>
                        <div className="custom-text-input"  >
                            <EposTextInputElement type="text" placeholder="User Name" />
                        </div>
                        <div className="custom-text-input"  >
                            <EposTextInputElement type="password" placeholder="Password" />
                        </div>
                        <div className="custom-submit-button" style={{
                            marginTop: '60px'
                        }} >
                            <Button
                                className="btn-default"
                                label="Login"
                            >

                            </Button>
                        </div>
                        <div className="forgot-password">
                            Forgot Password? <a style={{
                                textDecoration: 'none'
                            }} href="#" >click here</a>
                        </div>
                    </LoginDetails>
                </LoginWidget>
            </div>
        );
    }
}

export default () => {
    return <Login />;
};

