import React from "react";
import { Title } from "../../shared/title/title";
import { styles } from "./BMFLife.styles";
import brofist from "../../../images/brofist.png";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";
export const BMFLife = () => {
	const classes = styles();
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.textContainer}>
					<Title data="#BFMLIFE" />
					<div className={classes.textSpaceLeft}>
						<h1 className={classes.titleTxt}>Care To Join Us?</h1>
						<p className={classes.paragraph}>
							We’re a talented global team creating digital experiences that
							merge imagination and technology. Sound good? We’re hiring.
						</p>
						<ButtonRoundContainer text="view open jobs" />
					</div>
				</div>
				<div style={{ overflow: "hidden" }}>
					<div className={classes.blueBackgroundCircle}>
						<div className={classes.lightBlueBackground}>
							<div>
								<img src={brofist} alt="bro fist" />{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
