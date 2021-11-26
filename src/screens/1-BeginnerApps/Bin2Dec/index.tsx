import React, { useState } from "react";

import { useTheme } from "styled-components";

import {
  Container,
  Binary,
  InputNumberBinary,
  ContainerBinary,
  WrapperNumberConverted,
  TextConverted,
} from "./styles";
import { Alert, View } from "react-native";

import { ButtonApp } from "../../../components/ButtonApp";
import { MoreInformations } from "../../../components/MoreInformations";
import { Header } from "../../../components/Header";

export function Bin2Dec() {
  const theme = useTheme();

  const [valueBinary, setValueBinary] = useState("");
  const [valueDecimal, setValueDecimal] = useState("");

  const [text, setText] = useState("Binário");

  function convert() {
    const splitValueBinary = valueBinary.split("");

    const isBinary = splitValueBinary.filter((element) => {
      return Number(element) !== 0 && Number(element) !== 1;
    });

    if (isBinary.length > 0) {
      Alert.alert("Digite apenas 0 ou 1");
      setValueDecimal("");
      setValueBinary("");
      setText("Binário: ");
      return;
    } else if (valueBinary === "") {
      Alert.alert("Digite um valor");
    } else {
      const binaryToDecimal = parseInt(valueBinary, 2);
      setValueDecimal(String(binaryToDecimal));
      setText(`Binário: ${valueBinary}`);
      setValueBinary("");
    }
  }

  return (
    <Container colors={[theme.colors.primary_dark, theme.colors.primary]}>
      <Header title="Bin 2 Dec" />
      <ContainerBinary>
        <Binary>Número binário: </Binary>

        <InputNumberBinary
          onChangeText={(text) => setValueBinary(text)}
          placeholderTextColor={theme.colors.primary}
          value={valueBinary}
        />

        <ButtonApp title="Converter" onPress={() => convert()} />
      </ContainerBinary>

      <WrapperNumberConverted>
        <TextConverted>{text}</TextConverted>

        <TextConverted>Decimal: {valueDecimal}</TextConverted>
      </WrapperNumberConverted>

      <MoreInformations title="Leia mais sobre números bináros" />

      <View></View>
    </Container>
  );
}
