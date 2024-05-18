import {
  GradientOne,
  GradientSeven,
} from "@/assets/customComponents/gradients";
import { PaddedFullStack } from "../../assets/customComponents/containers";
import ScrollViewExample from "@/assets/customComponents/scrollContainer";
import { ScrollView } from "react-native";

export default function TabTwoScreen() {
  return (
    <GradientSeven>
      <PaddedFullStack>
        <ScrollView style={{ width: "100%", paddingHorizontal: 10 }}>
          <ScrollViewExample />
        </ScrollView>
      </PaddedFullStack>
    </GradientSeven>
  );
}
