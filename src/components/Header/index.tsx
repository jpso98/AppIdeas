import React from "react";

import { Container } from "./styles";

import { ArrowBack } from "../ArrowBack";
import { Title } from "../Title";

export function Header({ title }) {
  return (
    <Container>
      <ArrowBack />
      <Title title={title} />
    </Container>
  );
}
