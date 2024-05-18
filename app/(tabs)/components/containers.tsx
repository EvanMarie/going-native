import React from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";

export function CenterSafeFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export function FlexColSafeFull({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          flexDirection: "column",
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export function Box({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={style}>{children}</View>;
}
