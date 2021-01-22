import React from "react";
import { Title } from "../../shared/title/title";
import { styles } from "./Services.style";
import servicesImg from "../../../images/services.jpg";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";
export const Services = () => {
	const Classes = styles();
	return (
		<div className={Classes.container}>
			<Title size={22} color="#747474" data="services" />
			<div className={Classes.mainContainer}>
				<div className={Classes.listContainer}>
					<ul className={Classes.list}>
						<li>
							<h1>
								<a href="/">Stratergy</a>
							</h1>
						</li>
						<li>
							<h1>
								<a href="/">Branding</a>{" "}
							</h1>
						</li>
						<li>
							<h1>
								<a href="/">Experience Design</a>{" "}
							</h1>
						</li>
						<li>
							<h1>
								<a href="/">Technology</a>{" "}
							</h1>
						</li>
						<li>
							<h1>
								<a href="/">Digital Marketing</a>{" "}
							</h1>
						</li>
					</ul>
				</div>

				<div className={Classes.imgLinksContainer}>
					<div>
						{" "}
						<img src={servicesImg} alt="service" />
						{/*  <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        <img src="" alt=""/> */}
					</div>
					<div className={Classes.links}>
						<p className={Classes.description}>
							Great brand experiences persuade, convert, and inspire and they’re
							built on a foundation of brilliant, strategic design.
						</p>
						<ul className={Classes.listB}>
							<li>
								<a href="/">Information Architecture + UX</a>{" "}
							</li>
							<li>
								<a href="/">Website Design</a>
							</li>
							<li>
								<a href="/">Mobile App Design</a>
							</li>
							<li>
								<a href="/">eCommerce Design</a>
							</li>
							<li>
								<a href="/">Global Experience Assesment</a>
							</li>
							<li>
								<a href="/">Data Curation + Labeling</a>
							</li>
						</ul>
						<ButtonRoundContainer text="View All Resources" />
					</div>
				</div>
			</div>
		</div>
	);
};
