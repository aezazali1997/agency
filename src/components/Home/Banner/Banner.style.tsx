import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  banner: {
    display: "flex",
    padding: "0 .4rem",
    justifyContent: "center",
    background: "linear-gradient(to top,#004181,#0082c0)",
    height: "100vh",
    width: "100%",
  },

  bannerTxt: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  spaceLeft: {
    margin: "0 5rem",
  },
  prominentTxt: {
    fontSize: "4rem",
    color: "#fff",
    margin: "1rem 0",
  },
  paragraph: {
    margin: "1rem 0",
    fontSize: "1.5rem",
    color: "#fff",
  },
  bannerImg: {
    width: "50%",
    position: "relative",
    overflow: "hidden",
  },
  roundBackground: {
    position: "absolute",
    width: 1000,
    height: 1000,
    borderRadius: 1000,
    backgroundColor: "#6ccef6",
    transition: "all 2s ease",
    "&:hover": {
      marginLeft: "50px",
    },
  },
  roundForeground: {
    postion: "absolute",
    marginLeft: 50,
    marginTop: 100,
    backgroundColor: "#dddee3",
    height: 800,
    width: 800,
    borderRadius: 1000,
  },
  roundImage: {
    position: "absolute",
    borderRadius: 500,
    width: 700,
    height: 700,
    margin: "50px 0 0 50px",
    transition: "all 2s ease",
  },

  "@media (max-width:1110px)": {
    serviceContainer: {
      flexDirection: "column",
      height: "auto",
    },
    prominentTxt: {
      fontSize: "2rem",
    },
    banner: {
      height: "90vh",
    },
  },
  serviceContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    padding: "5rem 1rem",
    margin: "0",
  },
  "@media (max-width:760px)": {
    bannerImg: {
      display: "none",
    },
    prominentTxt: {
      fontSize: "1.5rem",
    },
    paragraph: {
      fontSize: "1rem",
    },
    banner: {
      height: "60vh",
    },
  },
});
