import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	Container: {
		width: "100%",
		padding: "2rem 1rem",
		backgroundColor: "#ededed",
	},
	title: {
		fontSize: "3rem",
		color: "#000",
		margin: "2rem 4rem",
		textTransform: "upperCase",
		transition: "all .3s ease",
		fontWeight: 700,
	},
	gridContainer: {
		display: "grid",
		gridTemplateColumns: "1fr",
	},
	viewProfileLink: {
		margin: "1rem 4rem",
	},
	workImageContainer: {
		display: "flex",
		flexDirection: "column",
		margin: "1rem 0",
		transition: "all .7s ease-out",
	},
	imageContainer: {
		margin: ".5rem",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		display: "block",
		transition: "all .7s ease-out",
	},
	link: {
		textDecoration: "none",
		color: "#000",
		margin: "1rem 2rem",
		width: "80%",
	},
	/* break points for title text */
	"@media (min-width:600px)": {
		gridContainer: {
			gridTemplateColumns: "repeat(2,1fr)",
		},
		workImageContainer: {
			margin: "1rem",
		},
	},
	"@media (min-width:800px)": {
		gridContainer: {
			gridTemplateColumns: "repeat(3,1fr)",
		},
	},

	/* end of media queries */
});
