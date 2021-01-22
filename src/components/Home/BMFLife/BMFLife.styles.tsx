import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	container: {
		margin: "1rem",
		backgroundColor: "#ededed",
		display: "flex",
		justifyContent: "space-between",
		height: 656,
	},
	wrapper: {
		position: "relative",
		margin: "10rem 0",
	},
	textContainer: {
		padding: "4rem 0",
		width: "40%",
	},
	textSpaceLeft: {
		margin: "2rem 0 0 4rem",
	},
	titleTxt: {
		fontSize: "3.5rem",
		color: "#000",
	},
	paragraph: {
		color: "#444",
		margin: "1rem 0 4rem 0",
		fontSize: "1.6rem",
		fontWeight: 200,
	},
	blueBackgroundCircle: {
		backgroundColor: "#0274c2",
		borderRadius: 500,
		width: 900,
		height: 900,
		position: "relative",
		right: 0,
		top: -50,
	},
	lightBlueBackground: {
		backgroundColor: "#00a1df",
		borderRadius: 500,
		width: 800,
		height: 800,
		position: "absolute",
	},
});
