import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Intermediate } from "../screens/Intermediate";

export function IntermediateRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intermediate" component={Intermediate} />
    </Stack.Navigator>
  );
}
