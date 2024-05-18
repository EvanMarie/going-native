import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors_Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

const styles = StyleSheet.create({
  tabBarIOS: {
    height: 55,
    paddingVertical: 10,
  },
  tabBarAndroid: {
    height: 55,
    paddingBottom: 10,
  },
});
