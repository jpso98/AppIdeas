import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  page: string;
}

export function Button({ title, page, ...rest }: Props) {
  const navigation = useNavigation();

  function handlePage(page) {
    navigation.navigate(page);
  }
  return (
    <Container onPress={() => handlePage(page)} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
