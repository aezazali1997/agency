import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	navBar: {
		display: "flex",
		padding: "1rem 2rem",
		backgroundColor: "#eee",
		width: "100%",
		justifyContent: "space-between",
		position: "fixed",
		zIndex: "99",
		opacity: ".9",
		transition: "all .1s",
	},
	active: {
		opacity: "1",
		backgroundColor: "transparent",
		transition: "all .1s",
	},

	/* logo and name of the website */
	logoName: {
		display: "flex",
		alignItems: "center",
	},
	logoIcon: {
		fontSize: "3rem",
		color: "#004181",
	},
	home: {
		textDecoration: "none",
	},
	iconActive: {
		color: "#fff",
	},
	name: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	tagLine: {
		fontSize: "2rem",
		margin: "0 .4rem",
		color: "#004181",
		fontWeight: 600,
	},
	taglineActive: {
		color: "#fff",
	},
	tagDescription: {
		fontSize: "1.1rem",
		margin: "0 1rem",
		color: "#004181",
	},
	tagDescriptionActive: {
		color: "#fff",
	},
	agency: {
		fontWeight: 800,
	},
	/* navlinks styling */
	linkContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	navLink: {
		listStyleType: "none",
		"& li": {
			display: "inline-block",
			margin: "0 1rem",
			"& a": {
				textDecoration: "none",
				fontSize: "1.2rem",
				fontWeight: 700,
				textTransform: "uppercase",
				color: "#004181",
				transition: " all .2s ease",
				"&:hover": {
					color: "#000",
				},
			},
		},
	},
	navLinkActive: {
		"& li": {
			"& a": {
				color: "#fff",
			},
		},
	},
	number: {
		"& button": {
			textDecoration: "none",
			fontSize: "1.2rem",
			fontWeight: 700,
			textTransform: "uppercase",
			color: "#004181",
			transition: " all .2s ease",
			background: "transparent",
			outline: "none",
			border: "none",
			"&:hover": {
				color: "#000",
			},
		},
	},
	numActive: {
		"& button": {
			color: "#fff",
		},
	},
	/*media queries  */
	"@media (max-width:960px)": {
		navLink: {
			display: "none",
		},
	},
	"@media (max-width:1110px)": {
		name: {
			display: "none",
		},
	},
});
