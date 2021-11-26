import React from "react";

import { Container, ColorSlider, Color } from "./styles";

interface Props {
  colorSlider: string;
  rgb: string;
  slider: number;
  setSlider: (text) => void;
}

export function ControllerColor({
  colorSlider,
  rgb,
  slider,
  setSlider,
}: Props) {
  return (
    <Container>
      <Color>{rgb}</Color>

      <ColorSlider
        minimumValue={0}
        maximumValue={256}
        minimumTrackTintColor={colorSlider}
        maximumTrackTintColor="#000000"
        value={slider}
        onValueChange={(text) => setSlider(text)}
      />

      <Color>{slider}</Color>
    </Container>
  );
}
