import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./app.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import { Contact } from "./components/Contact/Contact";
import { Insights } from "./components/Insights/Insights";
import { Company } from "./components/Company/Company";
import { Work } from "./components/Work/Work";
import { Services } from "./components/Services/Services"; */
import {Errorpage} from './components/shared/ErrorPage/Errorpage'
import {styles} from './App.style'
function App() {
	const [Width,setWidth]=useState<Number>(0)
		const handleResize = (e:Event) =>{
			setWidth(document.body.clientWidth);
	}
	window.addEventListener('resize',handleResize)
	window.addEventListener('load',handleResize)
	const [backgroundCLR, setBackgroundCLR] = useState(false);
	const classes= styles();
	/* navbar style change will happen through useState when its home page text background will be changing but when its contact its wil remain same as blue */

	const showResizeModel = () => {
		return (
			<div className={classes.model}>
			<h1>Please Resize the window to view the website</h1>
			</div>
		)
	}
	return (
		<Router>
			<div className="App">
				<Navbar back={backgroundCLR} />
				<Switch>
					<Route exact path="/">
						<Home setNav={setBackgroundCLR} />
					</Route>
					<Route path="/contact">
						<Errorpage  setNav={setBackgroundCLR}/>
						{/* <Contact setNav={setBackgroundCLR} /> */}
					</Route>
					<Route path="/insights">
											<Errorpage  setNav={setBackgroundCLR}/>

						{/* <Insights setNav={setBackgroundCLR} /> */}
					</Route>
					<Route path="/company">
											<Errorpage setNav={setBackgroundCLR} />

						{/* <Company setNav={setBackgroundCLR} /> */}
					</Route>
					<Route path="/work">
											<Errorpage setNav={setBackgroundCLR} />

						{/* <Work setNav={setBackgroundCLR} /> */}
					</Route>
					<Route path="/services">
											<Errorpage  setNav={setBackgroundCLR}/>

						{/* <Services setNav={setBackgroundCLR} /> */}
					</Route>
				</Switch>
				<Footer />
					{
				Width < 1200 ? showResizeModel() : '' 
			}
			</div>
		</Router>
	);
}

export default App;
