import {
	Button
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <div style={{padding: "20px", backgroundColor: "#fff"}}>
		<div className="header-details-container">
			<div className="header-details-card">
				<div className="header-details-card-header">
					<img src="img/header-details-cards/life-stage.svg" className="item-image nodrag"/>
					<span className="item-title">LIFE STAGE</span>
				</div>
				<div className="header-details-card-content">
					Married<br/>
					1 child
				</div>
			</div>
			<div className="header-details-card">
				<div className="header-details-card-header">
					<img src="img/header-details-cards/personal-details.svg" className="item-image nodrag"/>
					<span className="item-title">PERSONAL DETAILS</span>
				</div>
				<div className="header-details-card-content">
					<b>Selwyn Tan</b><br/>
					Male<br/>
					35 years old<br/>
					<br/>
					<b>Mary Tan ( wife )</b><br/>
					Female<br/>
					32 years old<br/>
					Married with 1 child
				</div>
			</div>
			<div className="header-details-card">
				<div className="header-details-card-header">
					<img src="img/header-details-cards/current-coverage.svg" className="item-image nodrag"/>
					<span className="item-title">CURRENT COVERAGE</span>
				</div>
				<div className="header-details-card-content">
					Death Coverage:<br/>
					<span className="lbl-currency">RM 500,000</span><br/>
					<br/>
					Total &amp; Permanent Disability (TPD):<br/>
					<span className="lbl-currency">RM 100,000</span><br/>
				</div>
			</div>
			<div className="header-details-card">
				<div className="header-details-card-header">
					<img src="img/header-details-cards/needs.svg" className="item-image nodrag"/>
					<span className="item-title">NEEDS</span>
				</div>
				<div className="header-details-card-content">
					Protection for Death:<br/>
					<span className="lbl-currency">RM 1,000,000</span><br/>
					<br/>
					Education Funding:<br/>
					<span className="lbl-currency">RM 50,000</span><br/>
				</div>
			</div>
			<div className="header-details-card">
				<div className="header-details-card-header">
					<img src="img/header-details-cards/assets.svg" className="item-image nodrag"/>
					<span className="item-title">ASSETS</span>
				</div>
				<div className="header-details-card-content">
					Assets:<br/>
					<span className="lbl-currency">RM 550,000</span><br/>
					<br/>
					Liabilities:<br/>
					<span className="lbl-currency">RM 200,000</span><br/>
					<br/>
					Net assets:<br/>
					<span className="lbl-currency">RM 350,000</span><br/>
				</div>
			</div>
			<div className="header-details-card">
				<div className="header-details-card-header">
					<img src="img/header-details-cards/cash-flow-n-budget.svg" className="item-image nodrag"/>
					<span className="item-title">CASH FLOW &amp; BUDGET</span>
				</div>
				<div className="header-details-card-content">
					Monthly Surplus:<br/>
					<span className="lbl-currency">RM 10,000</span><br/>
					<br/>
					<b>Budget:</b><br/>
					Cash (Monthly):<br/>
					<span className="lbl-currency">RM 3,000</span><br/>
					<br/>
					Cash (Single):<br/>
					<span className="lbl-currency">RM 50,000</span><br/>
				</div>
			</div>
		</div>
	</div>;
};
