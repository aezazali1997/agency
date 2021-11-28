import React, { FC } from "react";
import { ButtonRoundContainer } from "../../../shared/ButtonRoundContainer/ButtonRoundContainer";
import { styles } from "./Card.styles";
type Props = {
  title: string;
  para: string;
  link: string;
  size?: string;
  color?: string;
  arrColor?: string;
  rounddivColor?: string;
  image: string;
};
export const Card: FC<Props> = ({
  title,
  para,
  link,
  size,
  color,
  arrColor,
  rounddivColor,
  image,
}) => {
  const classes = styles();
  return (
    <div className={classes.webdesign}>
      <div className={classes.margLeft}>
        <h1 className={classes.servicesTitle}>{title}</h1>
        <p className={classes.servicesDescription}>{para}</p>
        <ButtonRoundContainer
          text={link}
          backgroundCLR={rounddivColor}
          clr={arrColor}
          txtColor={color}
          txtSize={parseInt(`${size}`)}
        />
      </div>
      <div
        style={{
          backgroundImage: image,
        }}
        className={classes.backContainer}
      ></div>
    </div>
  );
};
