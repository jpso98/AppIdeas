import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export function ButtonApp({ title, isActive = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
