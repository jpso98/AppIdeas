import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 82px;
  height: 29px;

  align-items: center;
  justify-content: center;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
