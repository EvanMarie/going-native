import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="design"
        options={{
          title: "Design",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "color-palette" : "color-palette-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tabOne"
        options={{
          title: "One",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "link" : "link-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tabTwo"
        options={{
          title: "Two",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "link" : "link-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
