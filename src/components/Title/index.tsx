import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return <Container>{title}</Container>;
}
