import { ScrollView, Text, View } from "react-native";
import {
  PaddedFullStack,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import { col, grads } from "@/constants/Colors";
import { GradientOne } from "../../assets/customComponents/gradients";

import { Text3xl } from "../../assets/customComponents/textComponents";

export default function HomeScreen() {
  return (
    <GradientOne>
      <Text3xl>Home</Text3xl>
    </GradientOne>
  );
}
