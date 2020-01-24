import * as React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { host } from "storybook-host";
import { Helper } from "./.helpers/Helper";
import { Toolkit } from "../src/Toolkit";

//include the SCSS for the demo
import "./.helpers/demo.scss";

Toolkit.TESTING = true;

addDecorator(
	host({
		cropMarks: false,
		height: "100%",
		width: "100%",
		padding: 20
	})
);

setOptions({
	name: "CandelaLabs Bootstrap UI",
	addonPanelInRight: true
});

storiesOf("Selection Grid", module)
	.add(
		"Basic Example",
		Helper.makeDemo(
			require("./selection-grid/demo-simple/index").default(),
			require("!!raw-loader!./selection-grid/demo-simple/index"),
			require("./selection-grid/demo-simple/docs.md").default
		)
	);

storiesOf("Selection Pane", module)
	.add(
		"Basic Example",
		Helper.makeDemo(
			require("./selection-pane/demo-simple/index").default(),
			require("!!raw-loader!./selection-pane/demo-simple/index"),
			require("./selection-pane/demo-simple/docs.md").default
		)
	);

// enable this to log mouse location when writing new puppeteer tests
//Helper.logMousePosition()