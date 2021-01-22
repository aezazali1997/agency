import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	listContainer: {
		display: "flex",
		margin: "1rem 4rem",
	},
	list: {
		listStyleType: "none",
		"& h1": {
			margin: "2rem 0",
			fontSize: "2.5rem",
		},
		"& a": {
			textDecoration: "none",
			color: "#6ccef6",
			transition: "all .3s ease",
			"&:hover": {
				color: "#000",
				transform: "skew(100deg)",
			},
		},
	},
	mainContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	container: {
		padding: "1rem 2rem",
		margin: "2rem 0",
		"& img": {
			width: 250,
			height: 600,
		},
	},
	links: {
		width: "100%",
		margin: "0 1rem",
		height: 600,
		backgroundColor: "#252b34",
		padding: "3rem 2rem",
	},
	description: {
		color: "#ffE",
		fontSize: "1.82rem",
		margin: "1rem 0",
		boxSizing: "border-box",
	},
	listB: {
		listStyleType: "none",
		"& li": {
			margin: "1.82rem 0",
			fontSize: "1.27rem",
		},
		"& a": {
			color: "#6ccef6",
			textDecoration: "none",
			"&:hover": {
				color: "#fff",
			},
		},
	},
	imgLinksContainer: {
		display: "flex",
		justifyContent: "space-evenly",
	},
	"@media (max-width:1000px)": {
		imgLinksContainer: {
			flexDirection: "column",
			justifyContent: "flex-start",
			"& img": {
				display: "none",
			},
		},
	},
	"@media (max-width:1300px)": {
		description: {
			fontSize: "1.2rem",
		},
		listB: {
			"& li": {
				fontSize: "1rem",
			},
		},
	},
});
