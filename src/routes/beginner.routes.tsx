import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Beginner } from "../screens/Beginner";

export function BeginnerRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Beginner" component={Beginner} />
      {/* <Stack.Screen name="Screennn" component={Screennn} /> */}
    </Stack.Navigator>
  );
}
