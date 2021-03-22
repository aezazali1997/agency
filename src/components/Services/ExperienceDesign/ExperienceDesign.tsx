import React from "react";
/* import styles */
import img from "../../../images/twoperson.jpg";
import chat from "../../../images/chat.png";
import { styles } from "./ExperienceDesign.style";
/* import styles */
export const ExperienceDesign = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div className={classes.imgContainer}>
				<img src={img} alt="" />
			</div>
			<div className={classes.content}>
				<div>
					<img src={chat} alt="" />
					<div className={classes.line}></div>
				</div>
				<div className={classes.txtContainer}>
					<h1 className={classes.heading}>strategy</h1>

					<p className={classes.smlTxt}>
						We’re consultants, guides, and partners for brands on digital
						transformation journeys. Wherever you’re going, we bring ideas and
						excitement to help you get there.
					</p>
					<ul className={classes.list}>
						<li>
							<a href="">Digital Stratergy</a>
						</li>
						<li>
							<a href="">Brand Stratergy</a>
						</li>
						<li>
							<a href="">Digital Transformation</a>
						</li>
						<li>
							<a href="">Content Stratergy</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
