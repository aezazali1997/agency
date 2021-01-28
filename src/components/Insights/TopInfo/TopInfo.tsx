import React from "react";
import { Title } from "../../shared/title/title";
/* import styles */
/* import styles */
import { styles } from "./TopInfo.style";
/* import styles */
import img from "../../../images/AI.jpg";
/* import styles */
export const TopInfo = () => {
	const classes = styles();
	return (
		<div className={classes.Container}>
			<Title size={64} data="Insights" />
			<div className={classes.subContainer}>
				<div className={classes.left}>
					<div className={classes.imageContainer}>
						<a href="#">
							{" "}
							<img className={classes.image} src={img} alt="" />
						</a>
					</div>
					<div>
						<Title data="Dec 02, 2020" size={24} color="#747474" />
					</div>
					<div className={classes.linkContainer}>
						<a href="">3 Ways to Put AI to Work for your Brand Now</a>
					</div>
				</div>
				<div className={classes.right}>
					<Title data="trending" capitalize={true} color="#fff" size={20} />
					<div className={classes.allText}>
						<span className={classes.txt}>NOV 20, 2020</span>
						<a href="#" className={classes.link}>
							The Impact of the Pandemic on the 2020 Holiday Shopping Season and
							What Retailers Can Do to Prepare
						</a>
						<p className={classes.txt}>
							2020 has been an unpredictable year for retailers. Some have seen
							sales slump sharply as previously popular product categories
							became less relevant to consumers who suddenly found themselves
							stuck at home,...
						</p>
						<div className={classes.line}></div>
						<span className={classes.txt}>NOV 20, 2020</span>
						<a href="#" className={classes.link}>
							November is National Native American Heritage Month
						</a>
						<p className={classes.txt}>
							We would like to take the opportunity to acknowledge the
							Indigenous history of the lands on which we are located and share
							information with the Pactera EDGE community about our local tribes
							– and how to engage...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
