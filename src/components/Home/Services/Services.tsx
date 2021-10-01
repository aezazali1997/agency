import React from "react";
import { Title } from "../../shared/title/title";
import { styles } from "./Services.style";
import servicesImg1 from "../../../images/hover-image-1.jpg";
import servicesImg2 from "../../../images/hover-image-2.jpg";
import servicesImg3 from "../../../images/hover-image-3.jpg";
import servicesImg4 from "../../../images/hover-image-4.jpg";
import servicesImg5 from "../../../images/hover-image-5.jpg";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";
export const Services = () => {
  const Classes = styles();
  const clicked= (e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log("clced");
  }
  return (
    <div className={Classes.container}>
      <Title size={22} color="#747474" data="services" />
      <div className={Classes.mainContainer}>
        <div className={Classes.listContainer}>
          <ul className={Classes.list}>
            <li >
              <h1>
                <button onClick={clicked} className={Classes.isSelected}  data-title=" stratergy">
                  Stratergy
                </button>
              </h1>
            </li>
            <li  >
              <h1>
                <button onClick={clicked}  data-title=" branding">
                  Branding
                </button>{" "}
              </h1>
            </li>
            <li  >
              <h1>
                <button onClick={clicked}  data-title=" Experience Design">
                  Experience Design
                </button>{" "}
              </h1>
            </li>
            <li  >
              <h1>
                <button onClick={clicked}  data-title=" Technology">
                  Technology
                </button>{" "}
              </h1>
            </li>
            <li >
              <h1>
                <button onClick={clicked} data-title=" Digital Marketing">
                  Digital Marketing
                </button>{" "}
              </h1>
            </li>
          </ul>
        </div>

        <div className={Classes.imgLinksContainer}>
          <div className={Classes.imgContainer}>
            <img
              style={{ display: "block" }}
              className={Classes.img}
              src={servicesImg1}
              alt="service"
            />
            <img className={Classes.img} src={servicesImg2} alt="service" />
            <img className={Classes.img} src={servicesImg3} alt="service" />
            <img className={Classes.img} src={servicesImg4} alt="service" />
            <img className={Classes.img} src={servicesImg5} alt="service" />
          </div>
          <div className={Classes.links}>
            <p className={Classes.description}>
              Great brand experiences persuade, convert, and inspire and they’re
              built on a foundation of brilliant, strategic design.
            </p>
            <ul className={Classes.listB}>
              <li>
                <a href="/">Information Architecture + UX</a>{" "}
              </li>
              <li>
                <a href="/">Website Design</a>
              </li>
              <li>
                <a href="/">Mobile App Design</a>
              </li>
              <li>
                <a href="/">eCommerce Design</a>
              </li>
              <li>
                <a href="/">Global Experience Assesment</a>
              </li>
              <li>
                <a href="/">Data Curation + Labeling</a>
              </li>
            </ul>
            <ButtonRoundContainer text="View All Resources" />
          </div>
        </div>
      </div>
    </div>
  );
};
