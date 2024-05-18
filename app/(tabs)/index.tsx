import { Text, View } from "react-native";
import {
  CenterSafeFull,
  FlexColSafeFull,
  PaddedFullStack,
} from "./components/containers";
import { col, grads } from "@/constants/Colors";
import {
  GradientOne,
  GradientTen,
  GradientThree,
  GradientTwo,
} from "./components/gradients";

export default function HomeScreen() {
  return (
    <GradientOne>
      <PaddedFullStack style={{ paddingHorizontal: 10 }}>
        <View style={{ flex: 1, position: "relative" }}>
          <View style={{ position: "absolute", bottom: 0 }}>
            <Text>Index</Text>
          </View>
        </View>
      </PaddedFullStack>
    </GradientOne>
  );
}
