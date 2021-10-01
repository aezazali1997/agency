import React from "react";
import { styles } from "./Banner.style";
import bannerImg from "../../../images/header1.jpg";
import { Card } from "./Card/Card";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";
import { Title } from "../../shared/title/title";
/* component */
export const Banner = () => {
	const classes = styles();
	return (
    <>
      <header className={classes.banner}>
        <div className={classes.bannerTxt}>
          <Title
            data="Demand More From Your Website"
            capitalize={true}
            size={64}
            color="white"
          />
          <div className={classes.spaceLeft}>
            <p className={classes.paragraph}>
              We merge dreams and technology to help brands grow in an age of
              digital transformation.
            </p>
            <ButtonRoundContainer
              text="Find Out"
              backgroundCLR="white"
              txtColor="white"
              clr="#0274c2"
            />
          </div>
        </div>
        <div className={classes.bannerImg}>
          <div className={classes.roundBackground}>
            <div className={classes.roundForeground}>
              <img
                className={classes.roundImage}
                src={bannerImg}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </header>
      <div className={classes.serviceContainer}>
        <Card
          title="Website Design"
          para="Specializing in creating highly performing sites for mid-market to enterprise businesses."
          link="Learn more..."
          size="24"
          color="#0274c2"
          arrColor="white"
          rounddivColor="#0274c2"
          image="url('https://images.pexels.com/photos/276223/pexels-photo-276223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        />
        <Card
          title="Digital Marketing"
          para="Prospects are people too. Marketing should be scientific, but never robotic."
          link="Learn more..."
          size="24"
          color="#0274c2"
          arrColor="white"
          rounddivColor="#0274c2"
          image="url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        />
        <Card
          title="Website Development"
          para="Step inside the center of excellence where we build bold, engaging new websites. "
          link="Learn more..."
          size="24"
          color="#0274c2"
          arrColor="white"
          rounddivColor="#0274c2"
          image="url('https://images.pexels.com/photos/276502/pexels-photo-276502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        />
      </div>
    </>
  );
};
