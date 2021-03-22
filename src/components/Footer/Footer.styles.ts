import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	footer: {
		background: "#252b34",
		padding: "2rem 4rem",
		display: "flex",
		justifyContent: "space-between",
		"& div p": {
			color: "#fff",
			lineHeight: "1.6rem",
		},
		"& h1": {
			color: "#fff",
			margin: "1rem 0",
		},
	},
	icon: {
		fontSize: "2rem",
		color: "#fff",
		"&:hover": {
			transition: "all .3s ease",
		},
	},
	twitter: {
		"&:hover": {
			color: "#00a1df",
		},
	},
	facebook: {
		"&:hover": {
			color: "#005593",
		},
	},
	linkedin: {
		"&:hover": {
			color: "#00a1df",
		},
	},
	instagram: {
		"&:hover": {
			color: "orange",
		},
	},
	icons: {
		display: "flex",
		justifyContent: "space-between",
	},
});
