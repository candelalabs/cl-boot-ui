import {
	Button
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <div style={{padding: "20px", backgroundColor: "#fff"}}>
		<table className="cross-table" style={{border: "1px solid #eff0fa", width: "100%"}}>
			<tr>
				<th className="cross-table-header"></th>
				<th className="cross-table-header">Protection for Death</th>
				<th className="cross-table-header">Education Fund</th>
				<th className="cross-table-header">Retirement Fund</th>
				<th className="cross-table-header">Long Term Care</th>
				<th className="cross-table-header">Personal Accident</th>
				<th className="cross-table-header">Personal Accident</th>
			</tr>
			<tr>
				<th className="cross-table-header">Total Fund Needed in RM</th>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">500,000</td>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">1,000,000</td>
			</tr>
			<tr>
				<th className="cross-table-header">Shortfall in RM</th>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">500,000</td>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">1,000,000</td>
				<td className="cross-table-cell">1,000,000</td>
			</tr>
			<tr>
				<th className="cross-table-header">Earliest Needed in</th>
				<td className="cross-table-cell">Upon occurence</td>
				<td className="cross-table-cell">12 years</td>
				<td className="cross-table-cell">25 years</td>
				<td className="cross-table-cell">25 years</td>
				<td className="cross-table-cell">25 years</td>
				<td className="cross-table-cell">25 years</td>
			</tr>
		</table>
	</div>;
};
