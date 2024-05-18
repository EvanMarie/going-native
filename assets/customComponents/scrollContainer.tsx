import { shadows } from "@/constants/boxShadows";
import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { GradientFour } from "./gradients";

export default function ScrollViewExample() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {Array.from({ length: 30 }).map((_, index) => (
        <View key={index} style={[styles.box, shadows.md]}>
          <Text style={styles.text}>Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    flexGrow: 1,
  },
  box: {
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});
