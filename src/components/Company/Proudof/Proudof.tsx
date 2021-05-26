import React from "react";
import { Title } from "../../shared/title/title";
/* import styles */
import ProudofIMG from "../../../images/proudof.png";
import ProudofIMG2 from "../../../images/proudof2.png";
import { SmallCompanies } from "../SmallCompanies/SmallCompanies";
/* import styles */
import { styles } from "./Proudof.style";
/* import styles */
/* import styles */
export const Proudof = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<Title
				data="what we are proud of"
				size={20}
				color="#555"
				capitalize={false}
			/>
			<SmallCompanies
				imagePath1={ProudofIMG}
				imageAlt1="work done by our company"
				imagePath2={ProudofIMG2}
				imageAlt2="work done by our company"
			/>
		</div>
	);
};
