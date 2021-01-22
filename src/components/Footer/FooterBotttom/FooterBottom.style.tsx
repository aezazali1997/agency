import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
	container: {
		borderTop: "1px solid #454b52",
		backgroundColor: "#252b34",
		display: "flex",
		justifyContent: "space-between",
		padding: "5rem",
		alignItems: "center",
		"& span,& a": {
			color: "#fff",
		},
	},
});
