import React from "react";
import { Title } from "../../shared/title/title";
import ClientIMG1 from "../../../images/clients1_0.png";
import ClientIMG2 from "../../../images/clients2_0.png";
import Meeting from "../../../images/bussinessmeeting.jpg";
/* import styles */
import { styles } from "./Workwith.style";
import { SmallCompanies } from "../SmallCompanies/SmallCompanies";
/* import styles */
export const Workwith = () => {
	const classes = styles();
	return (
		<div>
			<Title
				data="Who we work with"
				capitalize={false}
				size={20}
				color="#555"
			/>
			<div className={classes.imgContainer}>
				<SmallCompanies
					imagePath1={ClientIMG1}
					imagePath2={ClientIMG2}
					imageAlt1="company names"
					imageAlt2="company names"
				/>
				<img className={classes.img} src={Meeting} alt="meeting" />
			</div>
		</div>
	);
};
