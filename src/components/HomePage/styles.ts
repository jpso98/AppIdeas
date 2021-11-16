import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 80px;
  margin-bottom: 80px;

  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerButtons = styled.View``;
