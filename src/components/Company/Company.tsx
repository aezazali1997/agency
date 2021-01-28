import React from "react";
import { Philosphy } from "./Philosphy/Philosphy";
import { Workwith } from "./Workwith/Workwith";
/* import styles */
import { styles } from "./Company.style";
import { Proudof } from "./Proudof/Proudof";
import { StrategicAlliances } from "./Strategicalliances/StrategicAlliances";
import { BFMfamily } from "./BFMfamily/BFMfamily";
/* import styles */
export const Company = () => {
	const classes = styles();

	return (
		<div className={classes.company}>
			<Philosphy />
			<Workwith />
			<Proudof />
			<StrategicAlliances />
			<BFMfamily />
		</div>
	);
};