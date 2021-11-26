import React, { useState } from "react";
import { Text, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Input } from "../../../components/1-Beginner/BorderRadiusPreview2/Input";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import theme from "../../../global/styles/theme";

import {
  Container,
  ContainerBorderRadius,
  ContainerBorderTop,
  ManipulatedSquare,
  ContainerBorderBottom,
  CopyBorderRadius,
} from "./styles";

export function BorderRadiusPreviewer() {
  const [borderTopLeft, setBorderTopLeft] = useState("0");
  const [borderTopRight, setBorderTopRight] = useState("0");
  const [borderBottomLeft, setBorderBottomLeft] = useState("0");
  const [borderBottomRight, setBorderBottomRight] = useState("0");

  const borderRadius = `${borderTopLeft} ${borderTopRight} ${borderBottomLeft} ${borderBottomLeft} `;

  return (
    <Container colors={[theme.colors.primary_dark, theme.colors.primary]}>
      <Header title="Border Radius Previewer" />
      {/* <KeyboardAvoidingView> */}
      <ContainerBorderRadius>
        <ContainerBorderTop>
          <Input
            value={borderTopLeft}
            onChangeText={(text) =>
              setBorderTopLeft(text.replace(/[^\d]/g, ""))
            }
          />
          <Input
            value={borderTopRight}
            onChangeText={(text) =>
              setBorderTopRight(text.replace(/[^\d]/g, ""))
            }
          />
        </ContainerBorderTop>
        <ManipulatedSquare
          topLeft={borderTopLeft}
          topRight={borderTopRight}
          bottomLeft={borderBottomLeft}
          bottomRight={borderBottomRight}
        ></ManipulatedSquare>
        <ContainerBorderBottom>
          <Input
            value={borderBottomLeft}
            onChangeText={(text) =>
              setBorderBottomLeft(text.replace(/[^\d]/g, ""))
            }
          />
          <Input
            value={borderBottomRight}
            onChangeText={(text) =>
              setBorderBottomRight(text.replace(/[^\d]/g, ""))
            }
          />
        </ContainerBorderBottom>
      </ContainerBorderRadius>
      {/* </KeyboardAvoidingView> */}

      <CopyBorderRadius>border-radius: {borderRadius}</CopyBorderRadius>
    </Container>
  );
}
