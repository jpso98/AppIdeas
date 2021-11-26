import styled from "styled-components/native";

export const Container = styled.Text`
  margin-top: 80px;
  margin-bottom: 80px;

  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;
