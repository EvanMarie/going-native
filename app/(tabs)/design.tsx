import { ScrollView, Text, View } from "react-native";
import {
  PaddedFullStack,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import { GradientOne } from "../../assets/customComponents/gradients";
import GradientExamples from "../../assets/customComponents/designExamples/gradientExamples";
import {
  Text2xl,
  Text3xl,
  TextLg,
  TextMd,
  TextSm,
  TextXl,
} from "../../assets/customComponents/textComponents";

export default function DesignScreen() {
  return (
    <GradientOne>
      <PaddedFullStack>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <GradientExamples />
          <WrapFullWidth style={{ alignItems: "center", gap: 10 }}>
            <TextSm>TextSm</TextSm>
            <TextMd>TextMd</TextMd>
            <TextLg>TextLg</TextLg>
            <TextXl>TextXl</TextXl>
            <Text2xl>Text2xl</Text2xl>
            <Text3xl>Text3xl</Text3xl>
          </WrapFullWidth>
        </ScrollView>
      </PaddedFullStack>
    </GradientOne>
  );
}
