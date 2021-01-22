import React from "react";
import ClientIMG from "../../../images/client.jpg";
import { Title } from "../../shared/title/title";
import { styles } from "./Clients.style";

export const Clients = () => {
	const classes = styles();
	return (
		<div className={classes.client}>
			<Title size={22} color="#747474" data="Who We Work With" />
			<div className={classes.imgContainer}>
				<img className={classes.clientimage} src={ClientIMG} alt="Clients" />
			</div>
		</div>
	);
};
