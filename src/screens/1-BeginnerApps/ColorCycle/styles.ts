import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled(LinearGradient)`
  flex: 1;

  justify-content: space-around;
  align-items: center;
`;

export const Cycle = styled.View<Props>`
  width: 200px;
  height: 200px;

  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  background-color: ${({ color }) => color};
`;

export const Color = styled.Text``;

export const ContainerButtons = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
`;
