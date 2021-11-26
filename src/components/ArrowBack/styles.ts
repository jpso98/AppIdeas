import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  margin-top: 20px;
  justify-content: flex-end;
  width: 100%;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
