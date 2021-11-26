import styled from "styled-components/native";

export const Container = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};

  font-family: ${({ theme }) => theme.fonts.bold};

  font-size: 24px;
`;
