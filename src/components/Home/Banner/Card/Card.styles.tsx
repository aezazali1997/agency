import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  webdesign: {
    position: "relative",
    borderBottom: "5px solid #6ccef6",
    margin: "5rem 3rem",
    width: "100%",
    transition: "all .3s ease",
    "&:hover": {
      borderBottom: "5px solid crimson",
    },
    "&:hover $backContainer": {
      height: 350,
    },
    "&:hover $servicesTitle": {
      color: "#fff",
    },
    "&:hover $servicesDescription": {
      color: "#fff",
    },
  },
  margLeft: {
    margin: "1rem 3rem",
    zIndex: 20,
    position: "relative",
  },
  backContainer: {
    backgroundColor: "rgba(0, 161, 223,.1)",
    filter: "blur(3px)",
    backgroundPosition: "strech",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: 1,
    width: "100%",
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    transition: "all .3s ease-in-out",
  },

  servicesTitle: {
    margin: "1rem 0",
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  servicesDescription: {
    margin: "2rem 0",
  },
});
