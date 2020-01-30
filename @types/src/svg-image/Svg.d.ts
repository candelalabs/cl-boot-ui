import * as React from "react";
export interface SvgProps {
    url?: any;
    className: string;
}
export interface SvgState {
}
export default class Svg extends React.Component<SvgProps, SvgState> {
    state: {
        svg: any;
        loading: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
