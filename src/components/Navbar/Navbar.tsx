import React from 'react'
import {styles} from './Navbar.style'
import facebookImg from '../../images/google.jpg'
import whatsappImg from '../../images/wa.jpg'
/* component */
export const Navbar = () => {
const classes=styles()

  return (
    <>
    {/* home logo and name */}
    <nav className={classes.navBar}>
      <div className={classes.logoName}>
        <div className={classes.logo}>
          <img src={facebookImg} alt="facebook icon"/>
        </div>
        <div className={classes.name}>
          <h1 className={classes.tagLine}>IT solutions</h1>
          <span className={classes.tagDescription}>A solution provider <span className={classes.agency}>Agency</span></span>
          </div>
      </div>
      {/* navlinks */}
      <div className={classes.linkContainer}>
        <ul className={classes.navLink}>
          <li><a href="#">Services</a></li>
          <li><a href="#">work</a></li>
          <li><a href="#">company</a></li>
          <li><a href="#">insights</a></li>
          <li><a href="#">contact</a></li>
          <li><a href="#"> <img src={whatsappImg} alt="whatsapp icon"/> (+92)-334-4455231</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
