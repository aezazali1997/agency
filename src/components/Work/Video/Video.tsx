import React from "react";
import img from "../../../images/AI1.jpg";
/* import styles */
import { styles } from "./Video.style";
/* import styles */
export const Video = () => {
	const classes = styles();
	return (
		<div>
			<img className={classes.img} src={img} alt="Artificial Intelligence" />
		</div>
	);
};
