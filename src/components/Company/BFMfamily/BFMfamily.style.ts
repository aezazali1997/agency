import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	txtContainer: {
		padding: "0 5rem",
		margin: "2rem 0",
	},
	bigTxt: {
		fontSize: "3.5rem",
	},
	medTxt: {
		fontSize: "2.5rem",
	},
	smallTxt: {
		margin: ".5rem 0",
		fontSize: "1.2rem",
		color: "#333",
	},
	imgContainer: {
		display: "flex",
		justifyContent: "space-between",
		margin: "3rem 0",
	},
	img: {
		display: "block",
	},
	line: {
		marginTop: "2rem",
		height: "3px",
		width: "100px",
		background: "red",
	},
	left: {
		marginRight: "1rem",
	},
	right: {
		marginLeft: "1rem",
	},
});
