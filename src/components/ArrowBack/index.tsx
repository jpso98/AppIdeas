import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, Icon } from "./styles";

export function ArrowBack() {
  const navigation = useNavigation();

  return (
    <Container onPress={navigation.goBack}>
      <Icon name="arrow-left-circle" />
    </Container>
  );
}
