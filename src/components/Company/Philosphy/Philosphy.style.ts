import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  container: {
    padding: "8rem 2rem",
  },
  heading: {
    fontSize: "3.5rem",
    textTransform: "capitalize",
    margin: "3rem 0 0 5rem",
  },
  para: {
    width: "100%",
    padding: "0 32rem",
    fontSize: "1.2rem",
    color: "#333",
    fontWeight: 500,
    lineHeight: "1.6rem",
    margin: "4rem 0",
  },
  imgCont: {
    marginTop: "5rem",
    display: "flex",
    width: "47%",
  },
  image: {
    margin: "0 2rem",
    width: "100%",
    display: "block",
  },
  img: {
    position: "absolute",
    display: "block",
    zIndex: 0,
    top: 200,
    left: 0,
    width: "15%",
  },
});
