import React from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

export function CenterSafe({
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
