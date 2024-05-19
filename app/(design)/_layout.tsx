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
              height: 60,
              paddingBottom: 13,
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
        name="index"
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
          title: "Scroll View",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "list" : "list-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="demoOne"
        options={{
          title: "Parallax & Collapsible",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cube" : "cube-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="iconCards"
        options={{
          title: "Icon Cards",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "image" : "image-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
