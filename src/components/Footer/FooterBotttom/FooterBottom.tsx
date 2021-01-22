import React from "react";
import { styles } from "./FooterBottom.style";

export const FooterBottom = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div>
				<span>&copy;2020 Blue Fountain Media. All rights reserved.</span>
			</div>
			<div>
				<a href="/">privacy policy</a>
			</div>
		</div>
	);
};
