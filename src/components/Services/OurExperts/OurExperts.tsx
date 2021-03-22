import React from "react";
import { Title } from "../../shared/title/title";
/* import styles */
import { styles } from "./OurExperts.style";
/* import styles */
export const OurExperts = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div className={classes.left}>
				<Title
					data="meet our experts"
					capitalize={false}
					size={24}
					color="#000"
				/>
				<div className={classes.sub}>
					<span className={classes.comma}>,,</span>
					<p className={classes.para}>
						To me, BFM stands out for its collegiality and the drive to push
						projects forward. You’re always in a team of incredibly talented
						people, and it’s rare for us to leave a room without having solved
						at least one problem.
					</p>
					<h3>Bryn Dodson</h3>
					<span>Director of Content</span>
				</div>
				<div className={classes.btnContainer}>
					<div>
						<button className={classes.btn}>&#60;</button>
					</div>
					<div>
						<button className={classes.btn}> &#62;</button>
					</div>
				</div>
			</div>
			<div className={classes.right}>
				<div className={classes.backgroundCircle}></div>
				<div className={classes.foregroundCircle}></div>
				<div>
					<img src="" alt="" />
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
};
