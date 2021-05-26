import React, { useState, useEffect } from "react";
import { styles } from "./Navbar.style";
import { DiReact } from "react-icons/di";
import { IoLogoWhatsapp } from "react-icons/io";
import ClassNames from "classnames";
import { Link } from "react-router-dom";
/* component */
export const Navbar = () => {
	const [scrollPos, setScrollPos] = useState(0);
	const [show, setShow] = useState(true);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [scrollPos]);

	const handleScroll = () => {
		setScrollPos(document.body.getBoundingClientRect().top);
		setShow(document.body.getBoundingClientRect().top === 0);
	};
	/* dynamic classes */
	const classes = styles();
	const navbarClasses: string = ClassNames({
		[classes.navBar]: true,
		[classes.active]: show,
	});
	const iconClass: string = ClassNames({
		[classes.logoIcon]: true,
		[classes.iconActive]: show,
	});
	const taglineClass: string = ClassNames({
		[classes.tagLine]: true,
		[classes.taglineActive]: show,
	});
	const taglineDescClass: string = ClassNames({
		[classes.tagDescription]: true,
		[classes.tagDescriptionActive]: show,
	});
	const navLinkClass: string = ClassNames({
		[classes.navLink]: true,
		[classes.navLinkActive]: show,
	});
	const numberClass: string = ClassNames({
		[classes.number]: true,
		[classes.numActive]: show,
	});
	return (
    <>
      <nav className={navbarClasses}>
        <Link to="/" className={classes.home}>
          <div className={classes.logoName}>
            <div style={{ display: "inline-block" }}>
              <DiReact className={iconClass} />
            </div>
            <div className={classes.name}>
              <h1 className={taglineClass}>IT solutions</h1>
              <span className={taglineDescClass}>
                A solution provider Agency
              </span>
            </div>
          </div>
        </Link>
        {/* navlinks */}
        <div className={classes.linkContainer}>
          <ul className={navLinkClass}>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">work</Link>
            </li>
            <li>
              <Link to="/banner">company</Link>
            </li>
            <li>
              <Link to="insights">insights</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <div className={numberClass}>
            <button>
              <IoLogoWhatsapp /> (+92)-334-4455231
            </button>
          </div>
          <div>{/* hamburger icon */}</div>
        </div>
      </nav>
    </>
  );
};
