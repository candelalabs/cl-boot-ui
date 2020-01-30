import * as React from "react";
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import { SelectionGridItem } from "./SelectionGridWidget";
export interface SelectionGridCardProps extends BaseWidgetProps {
    item: SelectionGridItem;
    style?: any;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onEditClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    onDeleteClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}
export interface SelectionGridCardState {
}
export default class SelectionGridCard extends BaseWidget<SelectionGridCardProps, SelectionGridCardState> {
    constructor(props: SelectionGridCardProps);
    render(): JSX.Element;
}
