import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  flex: 1;

  justify-content: space-around;
  align-items: center;
`;

export const Binary = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InputNumberBinary = styled(TextInput).attrs({
  keyboardType: "numeric",
  placeholder: "ex: 10010011",
})`
  width: 166px;
  height: 28px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  justify-content: center;
`;

export const ContainerBinary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

export const WrapperNumberConverted = styled.View``;

export const TextConverted = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: 20px;

  font-family: ${({ theme }) => theme.fonts.bold};
`;
