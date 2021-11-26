import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 20px;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.shape};
`;
