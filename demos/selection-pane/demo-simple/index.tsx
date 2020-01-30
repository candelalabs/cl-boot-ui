import {
	SelectionPaneWidget
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <SelectionPaneWidget
	data={[
		{
			title: "Conservative"
		},
		{
			title: "Moderately conservative"
		},
		{
			title: "Moderately aggressive"
		},
		{
			title: "Aggressive"
		}
	]}
	/>;
};
