import React from 'react'
import {styles} from './Banner.style'
import bannerImg from '../../images/banner.jpg';
  /* component */
export const Banner = () => {
  const classes=styles();
  return (
    <>
    <header className={classes.banner}>
      {/* text */}
      <div className={classes.bannerTxt}>
        <h1 className={classes.prominentTxt}>We provide Best Solutions</h1>
        <p className={classes.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum maiores dolore fuga! At ut rem autem nobis eveniet error dolore.</p>
        <div className={classes.learnMore}>
        <h2><a href="#">Learn More <div className={classes.circle} > <span>&#62;</span> </div> </a></h2>
        
        </div>
      </div>
      {/* images */}
      <div className={classes.bannerImg}>
        <div className={classes.roundBackground}> 
          <div className={classes.roundForeground}>
            <img
            className={classes.roundImage}
            src={bannerImg}
            alt="banner"/>
          </div>
        </div>
      </div>
    </header>
    <div className={classes.serviceContainer}>
      <div>Website Design</div>
      <div>Digital marketing</div>
      <div>Website Development</div>
    </div>
    </>
  )
}
