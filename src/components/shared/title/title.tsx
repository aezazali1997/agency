import React from "react";
import { styles } from "./title.style";
type Props = {
	data: string;
	size?: number;
	color?: string;
	capitalize?: boolean;
};
export const Title = ({
	data,
	size,
	color = "#000",
	capitalize = true,
}: Props) => {
	const classes = styles();
	return (
		<div>
			<h3
				style={{
					fontSize: size,
					color: color,
					textTransform: capitalize ? "capitalize" : "uppercase",
				}}
				className={classes.title}
			>
				{data}
			</h3>
			<div className={classes.whoweWorkWith}></div>
		</div>
	);
};
