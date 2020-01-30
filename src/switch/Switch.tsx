import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import MuiSwitch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const IOSSwitch = withStyles(theme => ({
	root: {
		width: 42,
		height: 26,
		padding: 0,
		margin: theme.spacing(1),
	},
	switchBase: {
		padding: 1,
		'&$checked': {
			transform: 'translateX(16px)',
			color: theme.palette.common.white,
			'& + $track': {
				backgroundColor: '#8852c6',
				opacity: 1,
				border: 'none',
			},
		},
		'&$focusVisible $thumb': {
			color: '#52d869',
			border: '6px solid #fff',
		},
	},
	thumb: {
		width: 24,
		height: 24,
	},
	track: {
		borderRadius: 26 / 2,
		border: `1px solid ${theme.palette.grey[400]}`,
		backgroundColor: theme.palette.grey[50],
		opacity: 1,
		transition: theme.transitions.create(['background-color', 'border']),
		boxSizing: 'border-box'
	},
	checked: {},
	focusVisible: {},
	// @ts-ignore classes
}))(({ classes, ...props }) => {
	return (
		<MuiSwitch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
			}}
			{...props}
		/>
	);
});

export interface SwitchProps extends BaseWidgetProps {
}

export interface SwitchState {
}

export class Switch extends BaseWidget<any, SwitchState> {

	constructor(props: any) {
		super("switch", props);
	}

	render() {
		return (
			<Grid component="label" container alignItems="center" spacing={1}>
				<Grid item className="left-label">{this.props.leftLabel}</Grid>
				<Grid item className="switch-container">
					<IOSSwitch {...this.props} />
				</Grid>
				<Grid item className="right-label">{this.props.rightLabel}</Grid>
			</Grid>
		)
	}
}