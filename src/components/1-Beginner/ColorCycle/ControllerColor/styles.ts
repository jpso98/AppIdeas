import Slider from "@react-native-community/slider";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ColorSlider = styled(Slider)`
  width: 200px;
  height: 40px;
`;

export const Color = styled.Text``;
