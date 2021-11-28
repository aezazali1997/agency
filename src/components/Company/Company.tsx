import React, { FC } from "react";
import { Philosphy } from "./Philosphy/Philosphy";
import { Workwith } from "./Workwith/Workwith";
/* import styles */
import { styles } from "./Company.style";
import { Proudof } from "./Proudof/Proudof";
import { StrategicAlliances } from "./Strategicalliances/StrategicAlliances";
import { BFMfamily } from "./BFMfamily/BFMfamily";
/* import styles */
type Props = {
  setNav: (value: boolean) => void;
};
export const Company: FC<Props> = ({ setNav }) => {
  setNav(false);

  const classes = styles();

  return (
    <div className={classes.company}>
      <Philosphy />
      <Workwith />
      <Proudof />
      <StrategicAlliances />
      <BFMfamily />
    </div>
  );
};
