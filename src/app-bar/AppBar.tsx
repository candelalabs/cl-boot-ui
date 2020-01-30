import * as React from "react";
import * as _ from "lodash";

export interface TitleBarProps {
}


export interface TitleBarState {
}

export class AppBar extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}
	render() {
		return (
			<div 
				className="fna-titlebar" 
			>
				<div className="align-left">
					<img src="img/group-9.svg" className="Group-9"/>
					<span className="title">Selwyn’s Needs &amp; Risk Profilling</span>
				</div>
				<div className="align-right">
					<div className="save-button">
						<img src="img/floppy-disk-1.svg" className="floppy-disk-1"/>
						<span>Save</span>
					</div>
				</div>
			</div>
		)
	}
}