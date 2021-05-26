import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./app.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from "./components/Contact/Contact";
import { Insights } from "./components/Insights/Insights";
import { Company } from "./components/Company/Company";
import { Work } from "./components/Work/Work";
import { Services } from "./components/Services/Services";

function App() {
	const [backgroundCLR, setBackgroundCLR] = useState(false);
	/* navbar style change will happen through useState when its home page text background will be changing but when its contact its wil remain same as blue */
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
					<Route path="/insights">
						<Insights setNav={setBackgroundCLR} />
					</Route>
					<Route path="/company">
						<Company setNav={setBackgroundCLR} />
					</Route>
					<Route path="/work">
						<Work setNav={setBackgroundCLR} />
					</Route>
					<Route path="/services">
						<Services setNav={setBackgroundCLR} />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
