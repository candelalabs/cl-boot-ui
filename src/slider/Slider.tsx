import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import MuiSlider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
	root: {
		color: '#30308b',
		height: 10,
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '1px solid currentColor',
		marginTop: -6,
		marginLeft: -12,
		'&:focus,&:hover,&$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 10,
		borderRadius: 4,
	},
	rail: {
		height: 10,
		borderRadius: 4,
		backgroundColor: '#f2f2ff',
		border: "solid 0.5px #b4b4ff"
	},
})(MuiSlider);

export interface SliderProps extends BaseWidgetProps {
}

export interface SliderState {
}

export class Slider extends BaseWidget<any, any> {

	constructor(props: any) {
		super("slider", props);
	}

	render() {
		return (
			<PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
		)
	}
}