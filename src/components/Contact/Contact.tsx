import React, { useEffect } from "react";
import { Title } from "../shared/title/title";
import ReCAPTCHA from "react-google-recaptcha";
import { styles } from "./Contact.style";
import ClassNames from "classnames";
import { ButtonRoundContainer } from "../shared/ButtonRoundContainer/ButtonRoundContainer";
type Props = {
	setNav: (value: boolean) => void;
};
/* click handler for captcha */
export const Contact = ({ setNav }: Props) => {
	const classes = styles();
	useEffect(() => {
		setNav(false);
	}, []);
	return (
		<div className={classes.wrapper}>
			<Title size={60} data="Contact Us" />
			<div className={classes.container}>
				<div className={classes.subContainer}>
					<form className={classes.form}>
						<h2 className={classes.contactSubTitle}>
							lets strart a conversation
						</h2>
						<div className={classes.inputContainer}>
							<div>
								<input placeholder="First Name" type="text" />
								<input placeholder="Last Name" type="text" />
							</div>
							<div>
								<input placeholder="Email" type="text" />
								<input placeholder="Phone" type="text" />
							</div>
						</div>
						<input placeholder="Company Name" type="text" />
						<textarea
							rows={7}
							cols={40}
							placeholder="In a few words, please tell us about your request"
						/>
						<div className={classes.captchaContainer}>
							<ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
							<ButtonRoundContainer text="submit" />
						</div>
					</form>
				</div>
				<div
					className={ClassNames(classes.subContainer, classes.darkContainer)}
				>
					<div className={classes.halfContainer}>
						<Title color="#fff" size={20} data="Speak to us" />
						<div className={classes.titleContainer}>
							<h1 className={classes.titleText}>(646) 480.6328</h1>
						</div>
						<Title color="#fff" size={20} data="Other offices" />
						<div className={classes.seattleOfficeDetails}>
							<h1 className={classes.seattleOffice}>Seattle office</h1>
							<p className={classes.officeDetails}>
								14980 NE 31st Way, Suite 120 <br />
								Redmond, WA 98052
							</p>
							<a className={classes.getDirection} href="/">
								get directions
							</a>
						</div>
					</div>
					<div className={classes.halfContainer}>
						<Title color="#fff" size={20} data="Visit BMF" />

						<div className={classes.titleContainer}>
							<h1 className={classes.titleText}>
								New york <br />
								head quaters
							</h1>
							<p className={classes.officeDetails}>
								102 Madison Avenue, Second Floor
								<br /> New York, NY 10016
							</p>
							<a className={classes.getDirection} href="/">
								get directions
							</a>
						</div>
						<div></div>
						<div className={classes.titleContainer}>
							<h1 className={classes.seattleOffice}>Chicago office</h1>
							<p className={classes.officeDetails}>
								500 W Madison St, #1610
								<br /> Chicago, IL 60661
							</p>
							<a className={classes.getDirection} href="/">
								get directions
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
