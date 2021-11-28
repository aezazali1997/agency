import React, { FC } from "react";
import { Branding } from "./Branding/Branding";
import { DMarketing } from "./DigitalMarketing/DMarketing";
import { ExperienceDesign } from "./ExperienceDesign/ExperienceDesign";
import { OurExperts } from "./OurExperts/OurExperts";
import { Service } from "./Service/Service";
/* import styles */
import { styles } from "./Services.style";
import { Stratergy } from "./Stratergy/Stratergy";
import { Technology } from "./Technology/Technology";
/* import styles */
type Props = {
  setNav: (value: boolean) => void;
};
export const Services: FC<Props> = ({ setNav }) => {
  setNav(false);

  const classes = styles();
  return (
    <div className={classes.container}>
      <Service />
      <Stratergy />
      <Branding />
      <ExperienceDesign />
      <Technology />
      <DMarketing />
      <OurExperts />
    </div>
  );
};
