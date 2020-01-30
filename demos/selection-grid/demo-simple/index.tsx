import {
	SelectionGridWidget,
	Dialog,
	Button
} from "cl-boot-ui";
import * as React from "react";
import TextField from '@material-ui/core/TextField';

class Example extends React.Component<any,any> {
	constructor(props: any) {
		super(props);
		this.state = {
			open: false,
			data: [
				{
					imageSrc: "img/life-insurance.svg",
					title: "Protection for Death"
				},
				{
					imageSrc: "img/group-39.svg",
					title: "Protection for Disability"
				},
				{
					imageSrc: "img/heart-problem.svg",
					title: "Income Protection for Critical Illness"
				},
				{
					imageSrc: "img/pharmacy.svg",
					title: "Medical & Hospitalisation"
				}
			]
		};
	}

	render() {
		return (
			<div>
				<SelectionGridWidget data={this.state.data}

					onSelected={()=>{
						
					}}

					onEditClick={(index)=>{
						console.log("onEditClick");
						this.setState({open: true});
					}}
				/>
				<Dialog
				open={this.state.open}
				onClose={()=>{this.setState({open: false});}}
				header={<div className="header-content">
					<img src="img/heart-problem.svg" className="header-image nodrag"/>
					<div className="header-title">Income Protection for Critical Illness</div>
				</div>}
				>
					<div className="annual-income">
						<div className="lbl-annual-income">Annual Income needed in the event of death / disability</div>
						<TextField id="tf-annual-income" label="RM" variant="outlined" size="small" />
					</div>
					<div className="years-of-spending">
						<div className="lbl-years-of-spending">Number of years of spending</div>
						<TextField id="tf-years-of-spending" label="years" variant="outlined" size="small" />
					</div>
					<Button className="btn-done" label="Done" onClick={()=>{this.setState({open: false});}}/>
					<Button className="btn-cancel" label="Cancel" onClick={()=>{this.setState({open: false});}}/>
				</Dialog>
			</div>
		);
	}
}

export default () => {
	return <Example/>;
};
