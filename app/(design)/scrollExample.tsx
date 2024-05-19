import {
  GradientEight,
  GradientOne,
  GradientSeven,
} from "@/assets/customComponents/gradients";
import { PaddedFullStack } from "../../assets/customComponents/containers";
import ScrollViewExample from "@/assets/customComponents/scrollContainer";
import { ScrollView } from "react-native";

export default function ScrollExample() {
  return (
    <GradientEight>
      <PaddedFullStack>
        <ScrollView style={{ width: "100%" }}>
          <ScrollViewExample />
        </ScrollView>
      </PaddedFullStack>
    </GradientEight>
  );
}
