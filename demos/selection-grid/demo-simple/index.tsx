import {
	SelectionGridWidget
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <SelectionGridWidget data={[
			{
				imageSrc: "img/life-insurance.svg",
				title: "Protection for Death"
			},
			{
				imageSrc: "img/group-39.svg",
				title: "Protection for Disability"
			},
			{
				imageSrc: "img/heart-problem.svg",
				title: "Income Protection for Critical Illness"
			},
			{
				imageSrc: "img/pharmacy.svg",
				title: "Medical & Hospitalisation"
			}
		]}
		onSelected={()=>{
			
		}}
	/>;
};
