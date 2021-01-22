import React from "react";
import { styles } from "./Footer.styles";
import { FooterBottom } from "./FooterBotttom/FooterBottom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import ClassNames from "classnames";
import { ButtonRoundContainer } from "../shared/ButtonRoundContainer/ButtonRoundContainer";
export const Footer = () => {
	const classes = styles();
	return (
		<div>
			<div className={classes.footer}>
				<div>
					<h1>New York Headquarters</h1>
					<p>
						102 Madison Avenue - Second Floor <br /> New York, NY 10016 <br />
						T: (646) 480.6328
					</p>
					<ButtonRoundContainer
						text="get directions"
						backgroundCLR="#0274c2"
						txtColor="#0274c2"
					/>
				</div>
				<div>
					<h1>Join Our Social Community</h1>
					<div className={classes.icons}>
						<a href="/">
							<FaLinkedinIn
								className={ClassNames(classes.icon, classes.linkedin)}
							/>
						</a>
						<a href="/">
							<FaFacebookF
								className={ClassNames(classes.facebook, classes.icon)}
							/>
						</a>
						<a href="/">
							<GrInstagram
								className={ClassNames(classes.instagram, classes.icon)}
							/>
						</a>
						<a href="/">
							<FaTwitter
								className={ClassNames(classes.twitter, classes.icon)}
							/>
						</a>
					</div>
				</div>
				<div>
					<h1>Lets Discuss What's Next</h1>
					<p>
						Have a project or a question?
						<br /> We'd love to hear from you.
					</p>
					<ButtonRoundContainer
						text="contact us"
						backgroundCLR="#0274c2"
						txtColor="#0274c2"
					/>
				</div>
			</div>
			<FooterBottom />
		</div>
	);
};
