import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Advanced } from "../screens/Advanced";

export function AdvancedRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Advanced" component={Advanced} />
      {/* <Stack.Screen name="Screennn" component={} /> */}
    </Stack.Navigator>
  );
}
