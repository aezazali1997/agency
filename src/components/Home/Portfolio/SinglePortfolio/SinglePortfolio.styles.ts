import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  workImageContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "2rem 0",
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
  titleContainer: {},
  link: {
    textDecoration: "none",
    color: "#000",
    margin: "1rem 2rem",
    width: "80%",
  },
  whoweWorkWith: {
    width: 80,
    height: 4,
    backgroundColor: "red",
  },
  title: {
    color: "black",
    margin: "1rem 0 1.5rem 3rem",
    fontSize: "2rem",
  },
  /* break points for title text */
  "@media (min-width:600px)": {
    workImageContainer: {
      margin: "1rem",
    },
  },

  "@media (min-width:1200px)": {
    workImageContainer: {
      transition: "all .7s ease-out",
      "&:hover": {
        backgroundColor: "#222",
      },
      "&:hover a": {
        color: "#ddd",
      },
      "&:hover img": {
        transform: "scale(1.1)",
      },
      "&:hover h3": {
        color: "#ddd",
      },
    },
  },
  "@media (max-width:760px)": {
    title: {
      fontSize: "1rem",
    },
  },
  "@media (max-width:1000px)": {
    title: {
      fontSize: "1.4rem",
    },
  },
});
