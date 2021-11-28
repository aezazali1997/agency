import React, { useState } from "react";
import { Title } from "../../shared/title/title";
import { styles } from "./Services.style";
import servicesImg1 from "../../../images/hover-image-1.jpg";
import servicesImg2 from "../../../images/hover-image-2.jpg";
import servicesImg3 from "../../../images/hover-image-3.jpg";
import servicesImg4 from "../../../images/hover-image-4.jpg";
import servicesImg5 from "../../../images/hover-image-5.jpg";
import { dataArr } from "./content";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";
import { IContent, Ilink } from "../../../Interfaces";
export const Services = () => {
  const [content, setContent] = useState<IContent>(dataArr[0]);
  const Classes = styles();
  const clicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    let tempContext = 0;
    const btns = document.querySelectorAll("#services");
    const imgs: any = document.querySelectorAll("#image");
    btns.forEach((btn: any) => {
      btn.removeAttribute("class");
    });
    imgs.forEach((img: any) => {
      img.style.display = "none";
    });
    e.currentTarget.classList.add(Classes.isSelected);
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].hasAttribute("class")) {
        tempContext = i;
      }
    }
    imgs[tempContext].style.display = "block";
    setContent(dataArr[tempContext]);
  };
  return (
    <div className={Classes.container}>
      <Title size={22} color="#747474" data="services" />
      <div className={Classes.mainContainer}>
        <div className={Classes.listContainer}>
          <ul className={Classes.list}>
            <li>
              <h1>
                <button
                  id="services"
                  onClick={clicked}
                  className={Classes.isSelected}
                  data-title=" stratergy"
                >
                  Stratergy
                </button>
              </h1>
            </li>
            <li>
              <h1>
                <button id="services" onClick={clicked} data-title=" branding">
                  Branding
                </button>{" "}
              </h1>
            </li>
            <li>
              <h1>
                <button
                  id="services"
                  onClick={clicked}
                  data-title=" Experience Design"
                >
                  Experience Design
                </button>{" "}
              </h1>
            </li>
            <li>
              <h1>
                <button
                  id="services"
                  onClick={clicked}
                  data-title=" Technology"
                >
                  Technology
                </button>{" "}
              </h1>
            </li>
            <li>
              <h1>
                <button
                  id="services"
                  onClick={clicked}
                  data-title=" Digital Marketing"
                >
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
              id="image"
            />
            <img
              className={Classes.img}
              src={servicesImg2}
              alt="service"
              id="image"
            />
            <img
              className={Classes.img}
              src={servicesImg3}
              alt="service"
              id="image"
            />
            <img
              className={Classes.img}
              src={servicesImg4}
              alt="service"
              id="image"
            />
            <img
              className={Classes.img}
              src={servicesImg5}
              alt="service"
              id="image"
            />
          </div>
          <div className={Classes.links}>
            <p className={Classes.description}>{content.para}</p>
            <ul className={Classes.listB}>
              {content.listLinks.map((lnk: Ilink, index: number) => {
                return (
                  <li key={index}>
                    <a href={lnk.href}>{lnk.content}</a>
                  </li>
                );
              })}
            </ul>
            <ButtonRoundContainer text="View All Resources" />
          </div>
        </div>
      </div>
    </div>
  );
};
