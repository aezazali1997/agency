import React from "react";
import { Title } from "../../shared/title/title";
import img from "../../../images/AI1.jpg";
/* import styles */
import { styles } from "./Service.style";
/* import styles */
export const Service = () => {
	const classes = styles();
	return (
		<div>
			<div className={classes.sub}>
				<Title data="services" capitalize={true} size={52} />
				<p className={classes.subTxt}>
					Blue Fountain Media brands, builds, and promotes, offering end-to-end
					solutions, agility in execution, and depth of specialization.
				</p>
			</div>
		</div>
	);
};
