import React from "react";
import { Link } from "react-router-dom";
import chat from "../../../images/chat.png";
import img from "../../../images/twoperson.jpg";
/* import styles */
import { styles } from "./Technology.style";
/* import styles */
export const Technology = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
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
							<Link to="">Digital Stratergy</Link>
						</li>
						<li>
							<Link to="">Brand Stratergy</Link>
						</li>
						<li>
							<Link to="">Digital Transformation</Link>
						</li>
						<li>
							<Link to="">Content Stratergy</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={classes.imgContainer}>
				<img src={img} alt="" />
			</div>
		</div>
	);
};
