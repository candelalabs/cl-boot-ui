import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import { Switch } from "../switch/Switch";

export interface QuestionnaireProps extends BaseWidgetProps {
}

export interface QuestionnaireState {
}

export class Questionnaire extends BaseWidget<any, any> {

	constructor(props: any) {
		super("questionnaire", props);
		this.state = {
		};
	}

	render() {
		return (
			<div 
				className="cl-questionnaire" 
			>
				<div className="title">CKA</div>				
				<table>
					<tr>
						<td className="col-1">
							<div className="question">Did you hold any diploma or higher qualification in the finance-related disciplines ?  </div>
							<p className="description">
							Example: accountancy, actuarial science, business/business adminstration/business management/ studies, capital markets, commerce, economics, finance, financial engineering, financial planning, computational finance and insurance   
							</p>
							<Switch
								leftLabel="No"
								rightLabel="Yes"
							/>
						</td>
						<td className="col-2">
							<div className="question">If yes please provide more details ?  </div>
							<textarea></textarea>
						</td>
					</tr>
				</table>
				<div>&nbsp;</div>
			</div>
		)
	}
}