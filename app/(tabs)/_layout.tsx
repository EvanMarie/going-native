import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors_Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              height: 55,
              paddingBottom: 5,
              backgroundColor: Colors[colorScheme ?? "light"].background,
            },
            android: {
              height: 50,
              paddingBottom: 5,
              backgroundColor: Colors[colorScheme ?? "light"].background,
            },
          }),
        },
      }}
    >
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
        name="scrollExample"
        options={{
          title: "Scroll",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "link" : "link-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="demoOne"
        options={{
          title: "Demo 1",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "link" : "link-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="demoTwo"
        options={{
          title: "Demo 2",
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
