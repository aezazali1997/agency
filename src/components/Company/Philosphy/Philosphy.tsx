import React from "react";
import { Title } from "../../shared/title/title";
/* import styles */
import { styles } from "./Philosphy.style";
/* import styles */
import philosphy1 from "../../../images/philosphy1.jpg";
import philosphy2 from "../../../images/philosphy2.jpg";
export const Philosphy = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<Title data="company" capitalize={true} size={64} />
			<h1 className={classes.heading}>our philosphy</h1>
			<p className={classes.para}>
				Now is about change and disruption. It’s about the end of old
				certainties and the beginning of <b>new</b> opportunities. But if that’s
				now – what’s next? We believe what’s next is in the hands of people
				living in a <b>digital world</b>. Digital empowers people. They decide
				what they love, where they engage and what they support. They are
				connected and in control.
				<br />
				<br /> Your challenge – and ours – is to embrace that.
				<br />
				<br /> Find your people. Discover what they <b>need, want,</b> and love.
				Use data to drive a deep, continuing conversation and ensure each thing
				you do for your audience is better than the last. When it comes to
				digital, we’re unapologetic optimists. We’ve only scratched the surface
				of what’s possible. Next comes accelerating growth through the
				possibilities of digital – new experiences that merge imagination and
				technology in captivating new ways.
				<br />
				<br /> We invite you to join us on a journey from <b>now</b> to{" "}
				<b>next</b>.
			</p>
			<div className={classes.imgCont}>
				<img
					className={classes.image}
					src={philosphy1}
					alt="smiling in a meeting"
				/>
				<img className={classes.image} src={philosphy2} alt="asking for work" />
			</div>
		</div>
	);
};
