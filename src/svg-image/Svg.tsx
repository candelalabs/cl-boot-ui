import * as React from "react";
import * as _ from "lodash";

export interface SvgProps {
	url?: any,
	className: string
}

export interface SvgState {
}

export default class Svg extends React.Component<SvgProps, SvgState> {
	state = {
		svg: null,
		loading: false,
	}

	componentDidMount() {
		fetch(this.props.url)
			.then(res => res.text())
			.then(text => this.setState({ svg: text }));
	}

	render() {
		const { loading, svg } = this.state;
		const { className } = this.props;
		if (loading) {
			return <div className={"spinner " + className} />;
		} else if (!svg) {
			return <div className={"error " + className} />
		}
		return <div className={className} dangerouslySetInnerHTML={{ __html: this.state.svg }} />;
	}
}
