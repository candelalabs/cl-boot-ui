import {
	Questionnaire
} from "cl-boot-ui";
import * as React from "react";

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
		<label>CKA Outcome</label>
	</Questionnaire>;
};
