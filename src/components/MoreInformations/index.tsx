import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
}

export function MoreInformations({ title }: Props) {
  return <Container>{title}</Container>;
}
