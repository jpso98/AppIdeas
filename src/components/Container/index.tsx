import React from "react";
import theme from "../../global/styles/theme";

import { Background } from "./styles";

export function Container() {
  return (
    <Background
      colors={[theme.colors.primary_dark, theme.colors.primary]}
    ></Background>
  );
}
