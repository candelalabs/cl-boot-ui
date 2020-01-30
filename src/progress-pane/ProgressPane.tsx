import * as React from "react";
import * as _ from "lodash";
import classNames from "classnames";

export interface ProgressPaneProps {
}


export interface ProgressPaneState {
}

export class ProgressPane extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
	}

	componentDidMount() {
	}
	render() {
		return (
			<div 
				className="fna-tab" 
			>
				{
					this.props.data.map((item, index)=>{
						return (<div 
						className={classNames("fna-tab-item", index===this.state.selectedIndex?"selected":"")}
						onClick={()=>{
							this.setState({selectedIndex: index});
						}}
						>
							<span>{item.title}</span>
						</div>)
					})
				}
			</div>
		)
	}
}