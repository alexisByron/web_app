import React from "react";
import { buttomProps } from "./interface/ICustomButton";
import { EThemeNames } from "./enums/ECustomButton";
import { styles } from "./styles";

export const CustomButton = ({
  theme,
  onClick,
  text,
}: buttomProps) => {
  const styleButton =
    theme === EThemeNames.Primary
      ? styles.ButtonPrimary
      : styles.ButtonSecondary;

  return (
    <React.Fragment>
      <button
        style={styleButton}
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    </React.Fragment>
  );
};
