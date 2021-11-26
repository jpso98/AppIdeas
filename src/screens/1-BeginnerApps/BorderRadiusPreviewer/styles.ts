import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

interface Props {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerBorderRadius = styled.View`
  align-items: center;
  justify-content: space-between;

  width: 250px;
  height: 210px;
`;

export const ContainerBorderTop = styled.View`
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ManipulatedSquare = styled.View<Props>`
  width: 150px;
  height: 150px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-top-left-radius: ${({ topLeft }) => (topLeft ? `${topLeft}px` : 0)};
  border-top-right-radius: ${({ topRight }) =>
    topRight ? `${topRight}px` : 0};
  border-bottom-left-radius: ${({ bottomLeft }) =>
    bottomLeft ? `${bottomLeft}px` : 0};
  border-bottom-right-radius: ${({ bottomRight }) =>
    bottomRight ? `${bottomRight}px` : 0};
`;

export const ContainerBorderBottom = styled.View`
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CopyBorderRadius = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
`;
