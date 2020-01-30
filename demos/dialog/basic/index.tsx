import {
	Dialog
} from "cl-boot-ui";
import * as React from "react";

class DialogExample extends React.Component<any,any> {
	constructor(props: any) {
		super(props);
		this.state = {
			open: false
		};
	}

	render() {
		return (
			<div>
				<button type="button" onClick={()=>{this.setState({open: true});}}>
					Open Modal
				</button>
				<Dialog
				open={this.state.open}
				onClose={()=>{this.setState({open: false});}}
				/>
			</div>
		);
	}
}

export default () => {
	return <DialogExample/>;
};
