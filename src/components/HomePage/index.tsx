import React from "react";
import { FlatList } from "react-native-gesture-handler";

import theme from "../../global/styles/theme";

import { Button } from "../../components/Button";

import { Container } from "./styles";
import { Title } from "../Title";

interface DataProps {
  id: string;
  name: string;
}

interface Props {
  title: string;
  data: DataProps[];
}

export function HomePage({ title, data }: Props) {
  return (
    <Container colors={[theme.colors.primary, theme.colors.primary_dark]}>
      <Title title={title} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => <Button page={item.name} title={item.name} />}
        numColumns={2}
      />
    </Container>
  );
}
