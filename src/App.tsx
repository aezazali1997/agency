import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./app.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from "./components/Contact/Contact";
import { Company } from "./components/Company/Company";
import { Insights } from "./components/Insights/Insights";
// import { Work } from "./components/Work/Work";
// import { Services } from "./components/Services/Services";
import { Errorpage } from "./components/shared/ErrorPage/Errorpage";
import { styles } from "./App.style";
function App() {
  const [width, setWidth] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(true);
  const handleResize = (e: Event) => {
    setWidth(document.body.clientWidth);
    setLoad(false);
  };
  window.addEventListener("resize", handleResize);
  const [backgroundCLR, setBackgroundCLR] = useState(false);
  const classes = styles();

  const showResizeModel = () => {
    return (
      <div className={classes.model}>
        <h1>Please Resize the window to view the website</h1>
      </div>
    );
  };
  return (
    <Router>
      <div className="App">
        <Navbar back={backgroundCLR} />
        <Switch>
          <Route exact path="/">
            <Home setNav={setBackgroundCLR} />
          </Route>
          <Route path="/contact">
            <Contact setNav={setBackgroundCLR} />
          </Route>
          <Route path="/company">
            <Company setNav={setBackgroundCLR} />
          </Route>
          <Route path="/insights">
            <Insights setNav={setBackgroundCLR} />
          </Route>
          <Route path="/work">
            <Errorpage setNav={setBackgroundCLR} />

            {/* <Work setNav={setBackgroundCLR} /> */}
          </Route>
          <Route path="/services">
            <Errorpage setNav={setBackgroundCLR} />

            {/* <Services setNav={setBackgroundCLR} /> */}
          </Route>
        </Switch>
        <Footer />
        {width < 1200 && !load ? showResizeModel() : ""}
      </div>
    </Router>
  );
}

export default App;
