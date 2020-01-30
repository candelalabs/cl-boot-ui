/// <reference types="react" />
import * as PropTypes from "prop-types";
import { InferProps } from "prop-types";
import { BaseWidget } from "../common/BaseWidget";
export declare const RipplePropTypes: {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.Validator<object>;
    /**
     * @ignore
     */
    className: PropTypes.Requireable<string>;
    /**
     * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
     */
    pulsate: PropTypes.Requireable<boolean>;
    /**
     * Diameter of the ripple.
     */
    rippleSize: PropTypes.Requireable<number>;
    /**
     * Horizontal position of the ripple center.
     */
    rippleX: PropTypes.Requireable<number>;
    /**
     * Vertical position of the ripple center.
     */
    rippleY: PropTypes.Requireable<number>;
};
export interface RippleState {
    visible: boolean;
    leaving: boolean;
}
declare class Ripple extends BaseWidget<InferProps<typeof RipplePropTypes>, any> {
    static propTypes: {
        /**
         * Override or extend the styles applied to the component.
         * See [CSS API](#css-api) below for more details.
         */
        classes: PropTypes.Validator<object>;
        /**
         * @ignore
         */
        className: PropTypes.Requireable<string>;
        /**
         * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
         */
        pulsate: PropTypes.Requireable<boolean>;
        /**
         * Diameter of the ripple.
         */
        rippleSize: PropTypes.Requireable<number>;
        /**
         * Horizontal position of the ripple center.
         */
        rippleX: PropTypes.Requireable<number>;
        /**
         * Vertical position of the ripple center.
         */
        rippleY: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        pulsate: boolean;
    };
    constructor(props: InferProps<typeof RipplePropTypes>);
    handleEnter: () => void;
    handleExit: () => void;
    render(): JSX.Element;
}
export default Ripple;
