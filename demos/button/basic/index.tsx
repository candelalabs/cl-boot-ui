import {
	Button
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <div>
		<div style={{display:"block",marginBottom:"15px"}}>
			<Button
			className="btn-default"
			label="Default"
			/>
			<Button
			className="btn-alternate"
			label="Alternate"
			/>
		</div>
		<div style={{display:"block"}}>
			<Button
			className="btn-navigate"
			label="Needs & Risk Profiling"
			before={
			<span className="caret before">
				<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
					<g>
						<title>background</title>
						<rect fill="none" id="canvas_background" height="12" width="12" y="-1" x="-1" />
					</g>
					<g>
						<title>Layer 1</title>
						<line stroke-linecap="square" stroke-linejoin="null" id="svg_9" y2="4.429691" x2="1.875022" y1="1.875022" x1="6.999987" fill-opacity="null" stroke-opacity="null" stroke-width="1" stroke="#686868" fill="none" />
						<line stroke-linecap="square" stroke-linejoin="null" id="svg_10" y2="4.429691" x2="1.875022" y1="6.804675" x1="6.999987" fill-opacity="null" stroke-opacity="null" stroke-width="1" stroke="#686868" fill="none" />
					</g>
				</svg>
			</span>
			}
			/>
			<Button
			className="btn-navigate"
			label="Personal Details"
			after={
				<span className="caret after">
					<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
						<g>
							<title>background</title>
							<rect fill="none" id="canvas_background" height="12" width="12" y="-1" x="-1" />
						</g>
						<g>
							<title>Layer 1</title>
							<line stroke-linecap="square" stroke-linejoin="null" id="svg_9" y2="1.875022" x2="1.875022" y1="4.429691" x1="6.999987" fill-opacity="null" stroke-opacity="null" stroke-width="1" stroke="#686868" fill="none" />
							<line stroke-linecap="square" stroke-linejoin="null" id="svg_10" y2="6.804675" x2="1.875022" y1="4.429691" x1="6.999987" fill-opacity="null" stroke-opacity="null" stroke-width="1" stroke="#686868" fill="none" />
						</g>
					</svg>
				</span>
				}	
			/>
		</div>
	</div>;
};
