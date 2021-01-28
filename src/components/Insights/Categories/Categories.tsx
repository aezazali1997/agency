import React from "react";
import { Title } from "../../shared/title/title";
/* import styles */
import { styles } from "./Categories.style";
import image from "../../../images/AI.jpg";
import image1 from "../../../images/image6.jpg";
import image2 from "../../../images/image7.jpg";
import image3 from "../../../images/image8.jpg";
import image4 from "../../../images/image9.jpg";
import image5 from "../../../images/image10.jpg";
import image6 from "../../../images/image11.jpg";
import image7 from "../../../images/image12.jpg";
import image8 from "../../../images/image13.jpg";
import image9 from "../../../images/image14.jpg";
import Pagination from "rc-pagination";

/* import styles */
export const Categories = () => {
	const classes = styles();
	/* const [selected,setSelected] */

	return (
		<div className={classes.Container}>
			<Title color="grey" size={24} data="Categories" capitalize={true} />
			<ul className={classes.list}>
				<li>
					<span
						onClick={() => {
							alert();
						}}
					>
						all
					</span>
				</li>
				<li>
					<span>digital trends</span>
				</li>
				<li>
					<span>emerging technology</span>
				</li>
				<li>
					<span>consumer trends</span>
				</li>
				<li>
					<span>user experience</span>
				</li>
				<li>
					<span>digital platforms</span>
				</li>
				<li>
					<span>audience engagement</span>
				</li>
				<li className={classes.inputWraper}>
					<input
						type="text"
						className={classes.input}
						placeholder="Enter keywords"
					/>
					<input type="button" value=">" className={classes.arrowbtn} />
				</li>
			</ul>
			<div className={classes.grid}>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>JUL 21, 2020</span>
						<a href="" className={classes.link}>
							Designing Localized Experiences in Higher Education
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image1} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>AUG 21, 2020</span>
						<a href="" className={classes.link}>
							Localized Experiences Make all the Difference in the Life Sciences
							Industry
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image2} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>OCT 21, 2020</span>
						<a href="" className={classes.link}>
							October is National Disability Employment Awareness Month
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image3} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>SEP 21, 2020</span>
						<a href="" className={classes.link}>
							Data Labeling: Our Latest Solution for the AI-Powered Business
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image4} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>MAR 21, 2020</span>
						<a href="" className={classes.link}>
							3 Ways to Put AI to Work for your Brand Now
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image5} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>JAN 21, 2020</span>
						<a href="" className={classes.link}>
							The Impact of the Pandemic on the 2020 Holiday Shopping Season and
							What Retailers Can Do to Prepare
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image6} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>DEC 21, 2020</span>
						<a href="" className={classes.link}>
							November is National Native American Heritage Month
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image7} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>NOV 21, 2020</span>
						<a href="" className={classes.link}>
							Why Localization Matters in the Financial Services Sector
						</a>
					</div>
				</div>
				<div className={classes.box}>
					<a href="" className={classes.imgLink}>
						<img src={image8} className={classes.image} alt="" />
					</a>
					<div className={classes.txtWrapper}>
						<span className={classes.date}>OCT 21, 2020</span>
						<a href="" className={classes.link}>
							Data Labeling: Our Latest Solution for the AI-Powered Business
						</a>
					</div>
				</div>
			</div>
			<div className={classes.pages}>
				{/* 	<div className={classes.arrow}>&lt;</div> */}
				<Pagination defaultCurrent={1} current={4} />
				{/* 	<div className={classes.arrow}>&gt;</div> */}
			</div>
		</div>
	);
};
