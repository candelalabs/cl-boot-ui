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
				<div className="title">{this.props.title}</div>				
				<table>
					{
						this.props.data.map((item)=>{
							return (
								<tr>
									<td className="col-1">
										<div className="question">{item.question}</div>
										<p className="description">
										{item.description}
										</p>
										<Switch
											leftLabel="No"
											rightLabel="Yes"
										/>
									</td>
									<td className="col-2">
										<div className="question more">If yes please provide more details ?  </div>
										<textarea></textarea>
									</td>
								</tr>
							)
						})
					}
				</table>
				{this.props.children}
				<div>&nbsp;</div>
			</div>
		)
	}
}