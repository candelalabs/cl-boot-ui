import {
	Button
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <div style={{padding: "20px", backgroundColor: "#fff"}}>
		<div className="summary-container">
			<div className="summary-card">
				<div className="summary-card-header">
					<img src="img/life-insurance.svg" className="item-image nodrag"/>
					<br/>
					<label className="item-title">Death<br/>(DE)</label>
				</div>
			</div>
		</div>
	</div>;
};
