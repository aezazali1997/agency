import React from "react";
import { Title } from "../../shared/title/title";
import { styles } from "./insight.style";
import office from "../../../images/office.jpg";
import explain from "../../../images/explain.jpg";
import meeting from "../../../images/meeting.jpg";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";

export const Insights = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div className={classes.col}>
				<div>
					<Title data="insights" />
					<div className={classes.textSpaceLeft}>
						<h1 className={classes.titleText}>What's On Our Minds</h1>
						<ButtonRoundContainer text="explore insights" />
					</div>
				</div>
				<div className={classes.imgContainer}>
					<img className={classes.imgoffice} src={office} alt="office" />
				</div>
				<div className={classes.darkContainer}>
					<a className={classes.anchorHeading} href="/">
						<h1>3 Ways to Put AI to Work for your Brand Now</h1>
					</a>
					<p className={classes.writtenBY}>
						Written by
						<span>Blue fontain media</span>
					</p>
				</div>
			</div>
			<div className={classes.secondCol}>
				<div className={classes.imgContainer}>
					<img src={explain} alt="man writing" />
				</div>
				<div className={classes.blueBackground}>
					<a href="/">
						<h1>
							The Impact of the Pandemic on the 2020 Holiday Shopping Season and
							What Retailers Can Do to Prepare
						</h1>
					</a>
					<p>
						written by<span>dan drapeau</span>
					</p>
				</div>
				<div className={classes.imgContainer}>
					<img src={meeting} alt="meeting discusion" />
				</div>
			</div>
		</div>
	);
};
