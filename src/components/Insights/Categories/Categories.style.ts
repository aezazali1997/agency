import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  Container: {
    backgroundColor: "#ededed",
    padding: "6rem 2rem",
    position: "relative",
  },
  img: {
    position: "absolute",
    width: "12%",
    right: 0,
    top: -150,
    transform: "rotate(-180deg)",
  },
  list: {
    margin: "2rem",
    "& li": {
      display: "inline-block",
      textTransform: "capitalize",
      "& span": {
        color: "#20548e",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "1.2rem",
        "&:hover": {
          color: "#6ccef6",
          cursor: "pointer",
        },
        "&::before": {
          opacity: 0,
          content: "'→'",
          marginRight: ".8rem",
          color: "#000",
          fontSize: "2rem",
        },
      },
    },
  },
  input: {
    padding: "1rem 2rem",
    width: "100%",
    height: "100%",
    fontSize: "1rem",
  },
  inputWraper: {
    width: "20%",
    marginLeft: "1rem",
    position: "relative",
  },
  arrowbtn: {
    width: "2.5rem",
    height: "2.5rem",
    border: "none",
    backgroundColor: "#20548e",
    color: "#fff",
    borderRadius: "2rem",
    position: "absolute",
    fontSize: "2rem",
    top: "7px",
    right: -20,
    transition: "all .3s ease-in-out",
    "&:hover": {
      backgroundColor: "crimson",
    },
    "&:focus,&:focus": {
      outline: "none",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: "5rem",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "1rem 0",
  },
  custimage: {
    width: "auto",
  },
  date: {
    display: "inline-block",
    fontWeight: 300,
    fontSize: ".81rem",
    color: "grey",
    margin: ".5rem 0",
    fontFamily: "Arial san-serif",
  },
  link: {
    display: "inline-block",
    fontSize: "2rem",
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  imgLink: {
    width: "100%",
  },
  txtWrapper: {
    margin: "2rem",
  },
  pages: {
    display: "flex",
    justifyContent: "center",
  },
  arrow: {
    margin: "0 1rem",
    fontSize: "2rem",
    backgroundColor: "#20548e",
    color: "#fff",
    width: "3rem",
    height: "3rem",
    lineHeight: "3rem",
    textAlign: "center",
    borderRadius: "3rem",
  },
});
