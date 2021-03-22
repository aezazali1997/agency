import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	container: {
		margin: "5rem 0",
		display: "flex",
		justifyContent: "space-between",
	},
	imgContainer: {
		margin: "0 1rem",
	},
	content: {
		marginLeft: "1rem",
	},
	line: {
		marginTop: "2rem",
		height: "3px",
		width: "100px",
		background: "red",
	},
	txtContainer: {
		margin: "1rem 0 0 4rem",
	},
	heading: {
		textTransform: "capitalize",
		fontSize: "2rem",
	},
	smlTxt: {
		margin: "1rem 0",
		fontSize: "1.2rem",
		fontWeight: 400,
	},
	list: {
		margin: "3rem 0",
		listStyleType: "none",
		"& li a": {
			marginLeft: "3rem",
			textDecoration: "none",
			color: "#004181",
			fontSize: "1.52rem",
			position: "relative",
			"&:hover": {
				color: "#00a1df",
			},
			"&::before": {
				content: "'→'",
				left: -40,
				color: "red",
				fontSize: "1.5rem",
				position: "absolute",
			},
		},
		"& li": {
			margin: "1rem 0",
		},
	},
});
