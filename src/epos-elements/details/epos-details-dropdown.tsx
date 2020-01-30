import * as React from "react";
import * as _ from "lodash";
import { BaseWidget, BaseWidgetProps } from "../../common/BaseWidget";


export interface EposDetailsDropdownProps extends BaseWidgetProps {
    classList?:string[];
    onClick?:any;
    placeholder?:string;
    label:string;
    list:Array<string>;
}


export interface EposDetailsDropdownState {
    open:boolean;
    value:string;
}


export class EposDetailsDropdownElement extends BaseWidget<EposDetailsDropdownProps, EposDetailsDropdownState> {
    node:any;


    /*  */
    constructor(props: EposDetailsDropdownProps) {
        super("selection-grid", props);
        this.state = {
            open:false,
            value:null
        };
        this.outsideClick = this.outsideClick.bind(this);
    }
    outsideClick = (e) => {
        if (this.node && this.node.contains(e.target)) {
            return;
        }

        this.onClick(e);
    }
    onItemClick = (event,item) => {
        this.onClick(event,item);
    }
    onClick = (event,value?) => {
        if(this.props && this.props.onClick)
            this.props.onClick(event);
        

        if (!this.state.open) {
            document.addEventListener('click', this.outsideClick, false);
        } else {
            document.removeEventListener('click', this.outsideClick, false);
        }

        this.setState(prevState => ({
            open: !prevState.open,
            value: value ? value : this.state.value
        }));

    }


    render() {
        let classList = ['epos-details-dropdown'];
        if(this.props.classList){
            classList = [...classList,...this.props.classList];
        }

        let listBlock = <div className="dropbox" ref={node => { this.node = node; }}>
            {this.props.list.map((item,index)=>
                <ul key={index.toString()}>
                    <li onClick={(event)=>this.onItemClick(event,item)}>{item}</li>
                </ul>
            )}
        </div>;


        return (
            <div className={classList.join(' ')}>
                <label>{this.props.label}</label>
                <button onClick={(event) => this.onClick(event)}>
                    {this.state.value?this.state.value: <span className="placeholder">{this.props.placeholder} </span>}
                    <span className="caret">
                        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <title>background</title>
                                <rect fill="none" id="canvas_background" height="12" width="12" y="-1" x="-1" />
                            </g>
                            <g>
                                <title>Layer 1</title>
                                <line stroke-linecap="square" stroke-linejoin="null" id="svg_9" y2="6.804675" x2="4.250006" y1="4.429691" x1="1.875022" fill-opacity="null" stroke-opacity="null" stroke-width="1" stroke="#686868" fill="none" />
                                <line stroke-linecap="square" stroke-linejoin="null" id="svg_10" y2="6.804675" x2="4.375005" y1="4.429691" x1="6.999987" fill-opacity="null" stroke-opacity="null" stroke-width="1" stroke="#686868" fill="none" />
                            </g>
                        </svg>
                    </span>
                </button>
                {this.state.open && listBlock}
            </div>
        )
    }
}