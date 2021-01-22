import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	whoweWorkWith: {
		width: 80,
		height: 4,
		backgroundColor: "red",
	},
	title: {
		color: "grey",
		margin: "1rem 0 1.5rem 3rem",
		fontSize: "1.8rem",
	},
	"@media (max-width:760px)": {
		title: {
			fontSize: "1rem",
		},
	},
	"@media (max-width:1000px)": {
		title: {
			fontSize: "1.4rem",
		},
	},
});
