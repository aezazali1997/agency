import React, { FC, useEffect } from "react";
import { Banner } from "./Banner/Banner";
import { BMFLife } from "./BMFLife/BMFLife";
import { Clients } from "./Clients/Clients";
import { Insights } from "./Insight/Insight";
import { Portfolio } from "./Portfolio/Portfolio";
import { Services } from "./Services/Services";
type Props = {
  setNav: (value: boolean) => void;
};
export const Home: FC<Props> = ({ setNav }) => {
  useEffect(() => {
    setNav(true);
  }, [setNav]);

  return (
    <div>
      <Banner />
      <Clients />
      <Services />
      <Portfolio />
      <Insights />
      <BMFLife />
    </div>
  );
};
