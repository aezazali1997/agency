import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./app.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from "./components/Contact/Contact";
import { Insights } from "./components/Insights/Insights";
import { Company } from "./components/Company/Company";

/* primary colors of the web */
/* 
blakish 071108
greyish 364652
bluish light 7FBEEB
bluish capricon 56CBF9
*/
function App() {
	/* navbar style change will happen through useState when its home page text background will be changing but when its contact its wil remain same as blue */
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/insights" component={Insights} />
					<Route path="/company" component={Company} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
