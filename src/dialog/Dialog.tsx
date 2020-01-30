import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export interface DialogProps extends BaseWidgetProps {
}

export interface DialogState {
}

export class Dialog extends BaseWidget<any, any> {

	constructor(props: any) {
		super("dialog", props);
		this.state = {
		};
	}

	render() {
		return (
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="cl-dialog"
				open={this.props.open}
				onClose={this.props.onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={this.props.open}>
					<div className="cl-dialog-container">
						<div className="cl-dialog-header"></div>
						<h2 id="transition-modal-title">Transition modal</h2>
						<p id="transition-modal-description">react-transition-group animates me.</p>
					</div>
				</Fade>
			</Modal>
		)
	}
}