import React, { FC } from "react";
import { styles } from "./ButtonRoundContainer.style";
type Props = {
  text: string;
  txtSize?: number;
  txtColor?: string;
  backgroundCLR?: string;
  clr?: string;
};
export const ButtonRoundContainer: FC<Props> = ({
  text,
  txtSize = 24,
  txtColor = "#00a1df",
  backgroundCLR = "#00a1df",
  clr = "#fff",
}) => {
  const classes = styles();
  return (
    <div className={classes.submitContainer}>
      <input
        style={{ fontSize: txtSize, color: txtColor }}
        className={classes.submitBtn}
        type="submit"
        value={text.toUpperCase()}
      />
      <div
        style={{ color: clr, background: backgroundCLR }}
        className={classes.roundContainer}
      >
        &#62;
      </div>
    </div>
  );
};
