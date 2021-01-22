import React from "react";
import { Banner } from "./Banner/Banner";
import { BMFLife } from "./BMFLife/BMFLife";
import { Clients } from "./Clients/Clients";
import { Insights } from "./Insight/Insight";
import { Portfolio } from "./Portfolio/Portfolio";
import { Services } from "./Services/Services";

export const Home = () => {
	return (
		<div>
			<Banner />
			<Clients />
			<Services />
			<Portfolio />
			<Insights />
			<BMFLife />
		</div>
	);
};
