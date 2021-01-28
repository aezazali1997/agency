import React from "react";
import { Title } from "../../shared/title/title";
import { SmallCompanies } from "../SmallCompanies/SmallCompanies";
import company1 from "../../../images/alliance1.png";
import company2 from "../../../images/alliance2.png";
/* import styles */
import { styles } from "./StrategicAlliances.style";
/* import styles */
export const StrategicAlliances = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<Title
				data="Strategic Alliences"
				capitalize={false}
				size={20}
				color="#555"
			/>
			<SmallCompanies
				imagePath1={company1}
				imagePath2={company2}
				imageAlt1="companies that made alleance with us"
				imageAlt2="companies that made alleance with us"
			/>
		</div>
	);
};
