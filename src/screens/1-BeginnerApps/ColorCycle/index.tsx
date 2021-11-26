import React, { useState } from "react";
import theme from "../../../global/styles/theme";

import { Container, Cycle, ContainerButtons } from "./styles";

import { ControllerColor } from "../../../components/1-Beginner/ColorCycle/ControllerColor";
import { Title } from "../../../components/Title";
import { ButtonApp } from "../../../components/ButtonApp";
import { MoreInformations } from "../../../components/MoreInformations";
import { Header } from "../../../components/Header";

export function ColorCycle() {
  const [sliderRed, setSliderRed] = useState(0);
  const [sliderGreen, setSliderGreen] = useState(0);
  const [sliderBlue, setSliderBlue] = useState(0);

  let colorCircle = `rgb(${sliderRed},${sliderGreen},${sliderBlue})`;

  function handleChangeColor() {
    const rgb = () => {
      let red = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255);

      setSliderRed(red);
      setSliderGreen(green);
      setSliderBlue(blue);
    };
  }
  return (
    <Container colors={[theme.colors.primary_dark, theme.colors.primary]}>
      <Header title="Color Cycle" />

      <Cycle color={colorCircle} />

      <ControllerColor
        setSlider={setSliderRed}
        slider={sliderRed}
        rgb="R"
        colorSlider="red"
      />
      <ControllerColor
        setSlider={setSliderGreen}
        slider={sliderGreen}
        rgb="G"
        colorSlider="green"
      />
      <ControllerColor
        setSlider={setSliderBlue}
        slider={sliderBlue}
        rgb="B"
        colorSlider="blue"
      />

      <ContainerButtons>
        <ButtonApp onPress={handleChangeColor} title="Iniciar" />
      </ContainerButtons>

      <MoreInformations title="Leia mais sobre Rgb" />
    </Container>
  );
}
