import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import theme from "../global/styles/theme";

import {
  BeginnerRoutes,
  AdvancedRoutes,
  IntermediateRoutes,
} from "./index.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.primary_dark,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: theme.colors.shape,
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="battery-30"
              size={size}
              color={color}
            />
          ),
        }}
        name="Iniciante"
        component={BeginnerRoutes}
      />

      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="battery-60"
              size={size}
              color={color}
            />
          ),
        }}
        name="Intermediário"
        component={IntermediateRoutes}
      />

      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="battery" size={size} color={color} />
          ),
        }}
        name="Avançado"
        component={AdvancedRoutes}
      />
    </Navigator>
  );
}
