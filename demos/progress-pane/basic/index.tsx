import {
	ProgressPane
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <div style={{width: "100%", backgroundColor: "#fff", padding: "10px"}}>
		<ProgressPane
		data={[
			{
				title: "Needs & Risk Profilling"
			},
			{
				title: "Current Coverage"
			},
			{
				title: "Personal Details"
			},
			{
				title: "Assests & Liabilities"
			},
			{
				title: "Cash Flow & Budget"
			},
			{
				title: "Summary of Needs"
			},
			{
				title: "Recommendation"
			},
			{
				title: "Quotation"
			}
		]}
		/>
	</div>;
};
