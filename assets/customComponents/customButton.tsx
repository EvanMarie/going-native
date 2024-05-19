import React, { useState } from "react";
import { col } from "@/constants/Colors_Styles";
import { textShadows } from "@/constants/shadows";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";

interface CustomButtonProps {
  onPress?: () => void;
  scrollTo?: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
}

export default function CustomButton({
  onPress,
  scrollTo,
  style,
  text,
}: CustomButtonProps) {
  const [bg, setBg] = useState("transparent");

  const onPressButton = () => {
    if (scrollTo) {
      scrollTo();
    } else if (onPress) {
      onPress();
    }
  };

  const handlePressIn = () => {
    setBg(col[800]); // Change to the color you want when pressed
  };

  const handlePressOut = () => {
    setBg("transparent"); // Change back to the original color
  };

  return (
    <TouchableOpacity
      onPress={onPressButton}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        {
          paddingVertical: 8,
          display: "flex",
        },
        style,
      ]}
    >
      <Text
        style={[{ backgroundColor: bg, color: col[100] }, textShadows.rightMd]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
