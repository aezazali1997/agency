import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  Container: {
    padding: "4rem 2rem",
  },
  img: {
    position: "absolute",
    top: 100,
    left: 0,
    width: "10%",
  },
  linkContainer: {
    margin: "2rem",
    "& a": {
      fontSize: "2.5rem",
      textDecoration: "none",
      color: "#000",
      fontWeight: 700,
      "&:hover,&:active": {
        textDecoration: "underline",
      },
    },
  },
  left: {},
  imageContainer: {
    width: "57rem",
    marginRight: "1rem",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem 0",
  },
  right: {
    backgroundColor: "#252b34",
    width: "100%",
    marginLeft: "1rem",
    padding: "4rem 0",
  },
  allText: {
    margin: "2rem 4rem",
  },
  txt: {
    color: "grey",
    fontWeight: 500,
    fontSize: "1.1rem",
    lineHeight: "1.5rem",
    display: "block",
    margin: "1rem 0",
  },
  line: {
    margin: "3rem 0",
    width: "100%",
    border: "1px solid grey",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "2.5rem",
    fontWeight: 700,
    margin: "2rem 0",
    display: "block",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
