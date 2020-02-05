import {
	Questionnaire
} from "cl-boot-ui";
import * as React from "react";
import TextField from '@material-ui/core/TextField';

export default () => {
	return <Questionnaire
	title="CKA"
	data={[
		{
			question: "Did you hold any diploma or higher qualification in the finance-related disciplines ?",
			description: "Example: accountancy, actuarial science, business/business adminstration/business management/ studies, capital markets, commerce, economics, finance, financial engineering, financial planning, computational finance and insurance"
		},
		{
			question: "Did you have any other professional finance-related qualifications ?",
			description: "Example: accountancy, actuarial science, business/business adminstration/business management/ studies, capital markets, commerce, economics, finance, financial engineering, financial planning, computational finance and insurance"
		},
		{
			question: "Did you hold any diploma or higher qualification in the finance-related disciplines ?",
			description: "Example: accountancy, actuarial science, business/business adminstration/business management/ studies, capital markets, commerce, economics, finance, financial engineering, financial planning, computational finance and insurance"
		},
		{
			question: "Did you have any other professional finance-related qualifications ?",
			description: "Example: accountancy, actuarial science, business/business adminstration/business management/ studies, capital markets, commerce, economics, finance, financial engineering, financial planning, computational finance and insurance"
		}
	]}
	>
		<div className="div-outcome">
			<span className="lbl-outcome">CKA Outcome</span>
			<TextField className="tf-outcome" label="The CKA outcome will appear here" style={{width: "300px"}} />
		</div>
	</Questionnaire>;
};
