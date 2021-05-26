import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	container: {
		background: "#ededed",
		padding: "10rem 0",
		position: "relative",
		display: "flex",
	},
	sub: {
		marginLeft: "5rem",
	},
	comma: {
		fontSize: "8rem",
	},
	left: {
		width: "50%",
	},
	para: {
		fontSize: "1.5rem",
		margin: "1rem 0 3rem 0",
	},
	btnContainer: {
		marginLeft: "5rem",
		display: "flex",
		position: "absolute",
		bottom: -20,
		justifyContent: "space-between",
	},
	right: {
		width: "50%",
	},
	backgroundCircle: {
		width: "100%",
		height: "1%",
		backgroundColor: "red",
		borderRadius: "200rem	",
	},
	foregroundCircle: {
		width: "100%",
		height: "1%",
		backgroundColor: "blue",
		borderRadius: "200rem	",
	},
	btn: {
		width: "3rem",
		margin: "0 1rem",
		height: "3rem",
		borderRadius: "3rem",
		backgroundColor: "#005593",
		color: "white",
		fontSize: "2rem",
		border: "none",
		transition: "all .3s ease",
		"&:hover": {
			background: "crimson",
		},
		"&:focus": {
			outline: "none",
		},
	},
});
