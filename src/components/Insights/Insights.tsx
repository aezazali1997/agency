import React, { FC } from "react";
import { Categories } from "./Categories/Categories";
import { TopInfo } from "./TopInfo/TopInfo";
import { styles } from "./Insights.style";

type Props = {
  setNav: (value: boolean) => void;
};

export const Insights: FC<Props> = ({ setNav }) => {
  const classes = styles();
  setNav(false);

  return (
    <div className={classes.container}>
      <TopInfo />
      <Categories />
    </div>
  );
};
