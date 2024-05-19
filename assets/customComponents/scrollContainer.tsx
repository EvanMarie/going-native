import React from "react";
import { StyleSheet, View } from "react-native";

import { TextLg } from "./textComponents";
import { GradientFive } from "./gradients";
import { boxShadows } from "@/constants/shadows";
import { borders } from "@/constants/borders";

export default function ScrollViewExample() {
  return (
    <>
      {Array.from({ length: 300 }).map((_, index) => (
        <View key={index} style={[boxShadows.lg]}>
          <GradientFive style={[borders.borderXs300]}>
            <View
              style={[
                styles.box,

                {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
    padding: 20,
  },
});
