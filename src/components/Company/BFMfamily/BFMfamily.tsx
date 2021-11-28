import React from "react";
import { Title } from "../../shared/title/title";
import pactera from "../../../images/pactera.png";
import moonshot from "../../../images/moonshot.png";
import img from "../../../images/dots-arrow-left-side.png";
/* import styles */
import { styles } from "./BFMfamily.style";
import { ButtonRoundContainer } from "../../shared/ButtonRoundContainer/ButtonRoundContainer";
/* import styles */
export const BFMfamily = () => {
  const classes = styles();
  return (
    <div>
      <Title data="bfm family" capitalize={false} size={20} color="#555" />
      <div className={classes.txtContainer}>
      <img src={img} className={classes.imgDot} alt="" />
        <h1 className={classes.bigTxt}>Proudly Part Of Pactera Digital</h1>
        <p className={classes.smallTxt}>
          Blue Fountain Media delivers brand experiences as part of Pactera, a
          world leader in digital consulting and technology services.
        </p>
      </div>
      <div className={classes.imgContainer}>
        <div className={classes.left}>
          <img
            className={classes.img}
            src={pactera}
            alt="person pointing towards something"
          />
          <div className={classes.line}></div>
          <div className={classes.txtContainer}>
            <h1 className={classes.medTxt}>Pactera</h1>
            <p className={classes.smallTxt}>
              With 24 offices worldwide, Pactera is a global technology
              powerhouse that develops, modernizes, and optimizes the platforms
              that power today’s digital businesses.
            </p>
            <ButtonRoundContainer
              text="visit Pactera"
              backgroundCLR="#005593"
              txtColor="#005593"
              txtSize={20}
            />
          </div>
        </div>
        <div className={classes.right}>
          <img
            className={classes.img}
            src={moonshot}
            alt="logo of a company with colorfull background"
          />
          <div className={classes.line}></div>

          <div className={classes.txtContainer}>
            <h1 className={classes.medTxt}>Moonshot</h1>
            <p className={classes.smallTxt}>
              Moonshot is Pactera Digital’s innovation outpost, creating and
              servicing the innovative digital products that will enable
              businesses to transform their industries.
            </p>
            <ButtonRoundContainer
              text="visit moonshot"
              backgroundCLR="#005593"
              txtColor="#005593"
              txtSize={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
