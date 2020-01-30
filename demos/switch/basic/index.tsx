import {
	Switch
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	// @ts-ignore
	return (<div style={{width: "100%", backgroundColor: "#fff"}}>
			<Switch
				leftLabel="No"
				rightLabel="Yes"
			/>
		</div>
	)
};
