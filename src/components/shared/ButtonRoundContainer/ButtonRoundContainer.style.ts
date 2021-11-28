import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  submitBtn: {
    background: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transform: "translateX(0%)",
    transition: "all .2s ease-in",
    fontWeight: 700,
  },
  submitContainer: {
    margin: "2rem 0",
    cursor: "pointer",
    display: "inline-block",
    "&:hover $submitBtn": {
      color: "#00a1df",
      transform: "translateY(-3%)",
    },
    "&:hover $roundContainer": {
      fontSize: "1.5rem",
      padding: ".4rem .8rem",
      background: "crimson !important",
      color: "white !important",
    },
  },
  roundContainer: {
    width: 40,
    height: 40,
    fontSize: "2rem",
    borderRadius: "2.5rem",
    padding: ".2rem .7rem",
    marginLeft: "1rem",
    display: "inline-block",
    transition: "all .2s ease-in",
  },
});
