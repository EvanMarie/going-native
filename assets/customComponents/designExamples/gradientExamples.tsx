import React, { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Box, Flex } from "../containers"; // Adjust the import path accordingly
import { WrapFullWidth } from "../containers"; // Adjust the import path accordingly
import {
  GradientOne,
  GradientTwo,
  GradientThree,
  GradientFour,
  GradientFive,
  GradientSix,
  GradientSeven,
  GradientEight,
  GradientNine,
  GradientTen,
} from "../gradients";
import { col } from "@/constants/Colors_Styles";
import { TextMd } from "../textComponents";
import { borders, radii } from "@/constants/borders";
import { boxShadows, textShadows } from "@/constants/shadows";

export function GradientBox({
  label,
  Gradient,
  textColor,
}: {
  label: string;
  Gradient: React.ComponentType<{ children?: ReactNode; style: any }>;
  textColor?: string;
}) {
  return (
    <Flex style={[styles.box, boxShadows.glowLg900]}>
      <Gradient style={[radii.radiusXl, borders.borderSm700]}>
        <TextMd style={[{ color: textColor }, textShadows.glowXl]}>
          {label}
        </TextMd>
      </Gradient>
    </Flex>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 175,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    margin: 5,
  },
});

const gradients = [
  { label: "Gradient One", component: GradientOne, textColor: col["dark"] },
  { label: "Gradient Two", component: GradientTwo, textColor: col["dark"] },
  {
    label: "Gradient Three",
    component: GradientThree,
    textColor: col["light"],
  },
  { label: "Gradient Four", component: GradientFour, textColor: col["light"] },
  { label: "Gradient Five", component: GradientFive, textColor: col["light"] },
  { label: "Gradient Six", component: GradientSix, textColor: col["light"] },
  {
    label: "Gradient Seven",
    component: GradientSeven,
    textColor: col["light"],
  },
  {
    label: "Gradient Eight",
    component: GradientEight,
    textColor: col["light"],
  },
  { label: "Gradient Nine", component: GradientNine, textColor: col["light"] },
  { label: "Gradient Ten", component: GradientTen, textColor: col["light"] },
];

export default function GradientExamples() {
  return (
    <WrapFullWidth style={{ justifyContent: "space-evenly", rowGap: 12 }}>
      {gradients.map((gradient, index) => (
        <GradientBox
          key={index}
          label={gradient.label}
          Gradient={gradient.component}
          textColor={gradient.textColor}
        />
      ))}
    </WrapFullWidth>
  );
}
