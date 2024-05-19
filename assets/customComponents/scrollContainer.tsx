import React from "react";
import { StyleSheet, View } from "react-native";

import { TextLg } from "./textComponents";
import { GradientFive } from "./gradients";
import { boxShadows } from "@/constants/shadows";
import { borders } from "@/constants/borders";

export default function ScrollViewExample() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, index) => (
        <View key={index} style={[boxShadows.lg, { padding: 10 }]}>
          <GradientFive style={[{ borderRadius: 15 }, borders.borderXs300]}>
            <View
              style={[
                styles.box,

                {
                  // backgroundColor: "red",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                },
              ]}
            >
              <TextLg>{"Item No." + index + 1}</TextLg>
            </View>
          </GradientFive>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,
    padding: 20,
  },
});
