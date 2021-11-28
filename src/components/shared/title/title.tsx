import React, { FC } from "react";
import { styles } from "./title.style";
type Props = {
  data: string;
  size?: number;
  color?: string;
  capitalize?: boolean;
};
export const Title: FC<Props> = ({
  data,
  size,
  color = "#000",
  capitalize = true,
}) => {
  const classes = styles();
  return (
    <div>
      <h3
        style={{
          fontSize: size,
          color: color,
          textTransform: capitalize ? "capitalize" : "uppercase",
        }}
        className={classes.title}
      >
        {data}
      </h3>
      <div className={classes.whoweWorkWith}></div>
    </div>
  );
};
