import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screennn } from "../screens/Screennn";
import { Advanced } from "../screens/Advanced";
import { Intermediate } from "../screens/Intermediate";

export function IntermediateRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intermediate" component={Intermediate} />
      <Stack.Screen name="Screennn" component={Screennn} />
    </Stack.Navigator>
  );
}
