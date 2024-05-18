import { boxShadows } from "@/constants/shadows";
import React from "react";
import { StyleSheet, View } from "react-native";

import { TextLg } from "./textComponents";

export default function ScrollViewExample() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, index) => (
        <View key={index} style={[styles.box, boxShadows.md]}>
          <TextLg>{"Item No." + index + 1}</TextLg>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
});
