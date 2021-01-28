import React from "react";
import { Categories } from "./Categories/Categories";
import { TopInfo } from "./TopInfo/TopInfo";
/* import styles */
import { styles } from "./Insights.style";
/* import styles */
export const Insights = () => {
	const classes = styles();
	return (
		<div>
			<TopInfo />
			<Categories />
		</div>
	);
};
