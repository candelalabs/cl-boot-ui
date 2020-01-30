import {
	Button
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <div style={{padding: "20px", backgroundColor: "#fff"}}>
		<div style={{display:"block",marginBottom:"15px"}}>
			<table className="tabular-cards">
				<tr>
					<td className="card-1">
						<div className="card-display">
							<img src="img/life-insurance.svg" className="item-image nodrag"/>
							<br/>
							<label className="item-title">Death<br/>(DE)</label>
						</div>
						<div className="card-input">
							<input placeholder="Type your coverage"/>
						</div>
					</td>
					<td className="card-2">
						<div className="card-display">
							<img src="img/life-insurance.svg" className="item-image nodrag"/>
							<br/>
							<label className="item-title">Death<br/>(DE)</label>
						</div>
						<div className="card-input">
							<input placeholder="Type your coverage"/>
						</div>
					</td>
					<td className="card-3">
						<div className="card-display">
							<img src="img/life-insurance.svg" className="item-image nodrag"/>
							<br/>
							<label className="item-title">Death<br/>(DE)</label>
						</div>
						<div className="card-input">
							<input placeholder="Type your coverage"/>
						</div>
					</td>
					<td className="card-4">
						<div className="card-display">
							<img src="img/life-insurance.svg" className="item-image nodrag"/>
							<br/>
							<label className="item-title">Death<br/>(DE)</label>
						</div>
						<div className="card-input">
							<input placeholder="Type your coverage"/>
						</div>
					</td>
					<td className="card-5">
						<div className="card-display">
							<img src="img/life-insurance.svg" className="item-image nodrag"/>
							<br/>
							<label className="item-title">Death<br/>(DE)</label>
						</div>
						<div className="card-input">
							<input placeholder="Type your coverage"/>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div style={{display:"block"}}>
			
		</div>
	</div>;
};
