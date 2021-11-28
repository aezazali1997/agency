import React, { FC } from "react";
/* import styles */
import { styles } from "./SmallCompanies.style";
/* import styles */
type Props = {
  imagePath1: string;
  imageAlt1: string;
  imagePath2: string;
  imageAlt2: string;
};
export const SmallCompanies: FC<Props> = ({
  imagePath1,
  imagePath2,
  imageAlt1,
  imageAlt2,
}) => {
  const classes = styles();
  return (
    <div className={classes.Container}>
      <img className={classes.img} src={imagePath1} alt={imageAlt1} />
      <img className={classes.img} src={imagePath2} alt={imageAlt2} />
    </div>
  );
};
