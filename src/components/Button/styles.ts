import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 155px;
  height: 64px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  justify-content: center;

  margin: 10px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;
