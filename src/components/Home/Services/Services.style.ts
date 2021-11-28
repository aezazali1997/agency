import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  listContainer: {
    display: "flex",
    margin: "1rem 4rem",
    width: "20%",
  },
  imgContainer: {
    width: 300,
    height: 660,
    display: "block",
  },
  img: {
    width: "100%",
    display: "none",
    transition: "all .3s ease-in-out",
  },
  isSelected: {
    color: "#284f8d !important",
    fontWeight: 600,
    display: "block",
    transition: ".5s ease-in-out all",
    transformOrigin: "50% 0",
    transform: "translate3d(0px,0px,-30px) rotateX(90deg)",
  },
  list: {
    listStyleType: "none",
    "& h1": {
      margin: "2rem 0",
      fontSize: "2.5rem",
      fontWeight: "300",
    },
    "& button": {
      display: "block",
      background: "transparent",
      border: "none",
      fontSize: "inherit",
      cursor: "pointer",
      position: "relative",
      textDecoration: "none",
      color: "black",
      transition: ".5s ease-in-out all",
      width: "100%",
      transformStyle: "preserve-3d",
      transformOrigin: "50% 0",
      "&:hover": {
        transform: "translate3d(0px,0px,-30px) rotateX(90deg)",
      },
      "&::after": {
        display: "block",
        color: "#284f8d",
        content: "attr(data-title)",
        textTransform: "capitalize",
        position: "absolute",
        left: 0,
        top: 0,
        transition: ".5s ease-in-out all",
        transformOrigin: "50% 0",
        transform: "translate3d(0px,105%,0px) rotateX(-90deg)",
        fontWeight: 600,
        width: "100%",
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
