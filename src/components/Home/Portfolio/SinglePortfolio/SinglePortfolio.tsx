import React, { FC } from "react";
import { styles } from "./SinglePortfolio.styles";
type Props = {
  link: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  heading: string;
};
export const SinglePortfolio: FC<Props> = ({
  link,
  imgSrc,
  imgAlt,
  title,
  heading,
}) => {
  const classes = styles();
  return (
    <div className={classes.workImageContainer}>
      <div className={classes.imageContainer}>
        <a href={link}>
          <img className={classes.image} src={imgSrc} alt={imgAlt} />
        </a>
      </div>
      <div className={classes.titleContainer}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.whoweWorkWith}></div>
      </div>
      <a className={classes.link} href={link}>
        <h2>{heading}</h2>
      </a>
    </div>
  );
};
