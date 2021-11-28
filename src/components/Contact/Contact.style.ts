import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  wrapper: {
    padding: "7rem 2rem 0 2rem",
    backgroundColor: "#fff", //"#f6f3f3"
  },
  container: {
    display: "flex",
    position: "relative",
  },
  img: {
    position: "absolute",
    opacity: ".7",
  },
  subContainer: {
    width: "50%",
    margin: "0 1rem",
  },
  inputContainer: {
    display: "grid",
    "grid-template-columns": "repeat(2,1fr)",
    "column-gap": "1rem",
  },
  captchaContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactSubTitle: {
    color: "#333",
    fontSize: "2.5rem",
    margin: "2rem 0",
    textTransform: "capitalize",
    position: "relative",
  },
  darkContainer: {
    background: "#252b34",
    display: "flex",
    padding: "2rem 0",
  },
  form: {
    margin: "1rem 0",
    "& input[type=text],textarea": {
      fontSize: "1.3rem",
      padding: "1.3rem 1rem",
      width: "100%",
      margin: "1rem 0",
      background: "#f4f4f4",
      border: "1px solid #ddd",
    },
  },
  halfContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  getDirection: {
    color: "#015499",
    textDecoration: "none",
    fontSize: "1.5rem",
    textTransform: "capitalize",
    fontWeight: 700,
  },
  seattleOfficeDetails: {
    margin: "0 4rem",
  },
  officeDetails: {
    fontSize: "1.2rem",
    color: "#f1f2f2",
    margin: "1rem 0",
  },
  seattleOffice: {
    fontSize: "2rem",
    color: "white",
  },
  titleText: {
    color: "white",
    fontSize: "2.5rem",
    textTransform: "capitalize",
  },
  titleContainer: {
    margin: "0 3rem",
  },

  "@media (max-width:700px)": {
    form: {
      "& input[type=text],textarea": {},
    },
    darkContainer: {
      display: "none",
    },
  },
});
