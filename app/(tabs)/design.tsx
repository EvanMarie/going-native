import { ScrollView, Text, View } from "react-native";
import {
  PaddedFullStack,
  VStackFullWidth,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import { GradientOne } from "../../assets/customComponents/gradients";
import GradientExamples from "../../assets/customComponents/designExamples/gradientExamples";
import {
  HeadingLg,
  HeadingXl,
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
          <VStackFullWidth style={{ paddingVertical: 10 }}>
            <HeadingXl>Color Scheme Gradients</HeadingXl>
            <GradientExamples />
          </VStackFullWidth>
          <VStackFullWidth>
            <HeadingXl>Preset Text Sizes</HeadingXl>
            <WrapFullWidth style={{ alignItems: "center", gap: 10 }}>
              <TextSm>TextSm</TextSm>
              <TextMd>TextMd</TextMd>
              <TextLg>TextLg</TextLg>
              <TextXl>TextXl</TextXl>
              <Text2xl>Text2xl</Text2xl>
              <Text3xl>Text3xl</Text3xl>
            </WrapFullWidth>
          </VStackFullWidth>
        </ScrollView>
      </PaddedFullStack>
    </GradientOne>
  );
}
