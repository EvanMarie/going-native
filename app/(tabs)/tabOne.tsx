import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CenterSafeFull,
  PaddedFullStack,
} from "../../assets/customComponents/containers";
import { col } from "@/constants/Colors";
import ScrollViewExample from "@/assets/customComponents/scrollContainer";
import { shadows } from "@/constants/boxShadows";
import { GradientFive, GradientOne } from "@/assets/customComponents/gradients";

export default function TabTwoScreen() {
  return (
    <GradientOne>
      <PaddedFullStack>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollViewExample />
        </SafeAreaView>
      </PaddedFullStack>
    </GradientOne>
  );
}
