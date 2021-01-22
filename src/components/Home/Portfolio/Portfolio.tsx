import React from "react";
import { Title } from "../../shared/title/title";
import { styles } from "./Portfolio.style";
import logistic from "../../../images/image1.jpg";
import food from "../../../images/image2.jpg";
import home from "../../../images/image3.jpg";
import pharmaceutical from "../../../images/image4.jpg";
import tech from "../../../images/image5.jpg";
import beverages from "../../../images/image6.jpg";
import { SinglePortfolio } from "./SinglePortfolio/SinglePortfolio";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";

// props to be sned to CARD file

/* components */
export const Portfolio = () => {
	const classes = styles();
	return (
		<div className={classes.Container}>
			<Title size={26} color="#747474" data="Portfolio" />
			<div>
				<h1 className={classes.title}>Work that excite us</h1>
				<div className={classes.gridContainer}>
					<SinglePortfolio
						link="#"
						imgSrc={logistic}
						imgAlt="logistic"
						title="Logistics"
						heading="Stop & Stor: A digital upgrade for New York’s Self Storage Leader"
					/>
					<SinglePortfolio
						link="#"
						imgSrc={food}
						imgAlt="food"
						title="FOOD & BEVERAGE"
						heading="BFM helps restaurant supplier Baldor pivot to home delivery"
					/>
					<SinglePortfolio
						link="#"
						imgSrc={home}
						imgAlt="logistic"
						title="HOME GOODS"
						heading="A data-driven makeover for a major American retailer’s digital showroom"
					/>
					<SinglePortfolio
						link="#"
						imgSrc={pharmaceutical}
						imgAlt="logistic"
						title="NONPROFIT"
						heading="National Garden Clubs: Digging new ground for the next generation"
					/>
					<SinglePortfolio
						link="#"
						imgSrc={tech}
						imgAlt="PHARMACEUTICAL"
						title="PHARMACEUTICAL"
						heading="BluePearl: Bringing world-class care to America's pets"
					/>
					<SinglePortfolio
						link="#"
						imgSrc={beverages}
						imgAlt="logistic"
						title="Logistics"
						heading="FedEx Ground: An internal communications hub for 25,000+ employees"
					/>
				</div>
				<div className={classes.viewProfileLink}>
					<ButtonRoundContainer text="view full portfolio" />
				</div>
			</div>
		</div>
	);
};
