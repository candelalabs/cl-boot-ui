/// <reference types="react" />
import { BaseWidget, BaseWidgetProps } from "../common/BaseWidget";
import { BaseMouseAction } from "../common/actions/BaseMouseAction";
export interface SelectionGridItem {
    id?: string;
    imageSrc: string;
    title: string;
    amount?: string;
    moved?: boolean;
    initialX?: number;
    initialY?: number;
    moveX?: number;
    moveY?: number;
    selected?: boolean;
}
export interface SelectionGridProps extends BaseWidgetProps {
    data: Array<SelectionGridItem>;
}
export interface SelectionGridSelected {
    index: number;
    item: SelectionGridItem;
}
export interface SelectionGridState {
    document: any;
    isMoving: boolean;
    action?: BaseMouseAction;
    moveInfo?: any;
    hoverSelect?: boolean;
    selected: Array<SelectionGridSelected>;
    placeholders: Array<string>;
}
export declare class SelectionGridWidget extends BaseWidget<SelectionGridProps, SelectionGridState> {
    parentRef: any;
    selectedParentRef: any;
    constructor(props: SelectionGridProps);
    componentDidMount(): void;
    getMouseElement(event: any): {
        item: SelectionGridItem;
        element: Element;
    };
    onMouseMove(event: any): void;
    onMouseUp(event: any): void;
    render(): JSX.Element;
}
