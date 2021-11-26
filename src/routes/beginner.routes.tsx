import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Beginner } from "../screens/Beginner";
import {
  Bin2Dec,
  ColorCycle,
  BorderRadiusPreviewer,
} from "../screens/1-BeginnerApps/index";

export function BeginnerRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Beginner" component={Beginner} />
      <Stack.Screen name="Bin 2 Dec" component={Bin2Dec} />
      <Stack.Screen name="Color Cycle" component={ColorCycle} />
      <Stack.Screen
        name="Border Radius Previewer"
        component={BorderRadiusPreviewer}
      />
    </Stack.Navigator>
  );
}
