import * as React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { host } from "storybook-host";
import { Helper } from "./.helpers/Helper";
import { Toolkit } from "../src/Toolkit";

//include the SCSS for the demo
import "./scss/demo.scss";

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

storiesOf("Button", module)
	.add(
		"Basic Button",
		Helper.makeDemo(
			require("./button/basic/index").default(),
			require("!!raw-loader!./button/basic/index"),
			require("./button/basic/docs.md").default
		)
	);

storiesOf("Switch", module)
	.add(
		"Basic Switch",
		Helper.makeDemo(
			require("./switch/basic/index").default(),
			require("!!raw-loader!./switch/basic/index"),
			require("./switch/basic/docs.md").default
		)
	);

storiesOf("Slider", module)
	.add(
		"Basic Slider",
		Helper.makeDemo(
			require("./slider/basic/index").default(),
			require("!!raw-loader!./slider/basic/index"),
			require("./slider/basic/docs.md").default
		)
	);

storiesOf("Expander", module)
	.add(
		"Basic Expander",
		Helper.makeDemo(
			require("./expander/basic/index").default(),
			require("!!raw-loader!./expander/basic/index"),
			require("./expander/basic/docs.md").default
		)
	);

storiesOf("Questionnaire", module)
	.add(
		"Basic Questionnaire",
		Helper.makeDemo(
			require("./questionnaire/basic/index").default(),
			require("!!raw-loader!./questionnaire/basic/index"),
			require("./questionnaire/basic/docs.md").default
		)
	);

storiesOf("ProgressPane", module)
	.add(
		"Basic ProgressPane",
		Helper.makeDemo(
			require("./progress-pane/basic/index").default(),
			require("!!raw-loader!./progress-pane/basic/index"),
			require("./progress-pane/basic/docs.md").default
		)
	);

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

storiesOf("Layout", module)
	.add(
		"Tabular Cards",
		Helper.makeDemo(
			require("./layout/tabular-cards/index").default(),
			require("!!raw-loader!./layout/tabular-cards/index"),
			require("./layout/tabular-cards/docs.md").default
		)
	);

storiesOf("Dialog", module)
	.add(
		"Basic Dialog",
		Helper.makeDemo(
			require("./dialog/basic/index").default(),
			require("!!raw-loader!./dialog/basic/index"),
			require("./dialog/basic/docs.md").default
		)
	);

storiesOf("Login Module", module)
	.add(
		"Login",
		Helper.makeDemo(
			require("./login/index").default(),
			require("!!raw-loader!./login/index"),
			require("./login/docs.md").default
		)
	);


storiesOf("Epos Elements", module)
	.add(
		"Epos Elements",
		Helper.makeDemo(
			require("./epos-elements/index").default(),
			require("!!raw-loader!./epos-elements/index"),
			require("./epos-elements/docs.md").default
		)
	);

// enable this to log mouse location when writing new puppeteer tests
//Helper.logMousePosition()
