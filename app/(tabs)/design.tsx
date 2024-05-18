import { ScrollView, Text, View } from "react-native";
import {
  Flex,
  PaddedFullStack,
  VStackFullWidth,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import { GradientOne } from "../../assets/customComponents/gradients";
import GradientExamples from "../../assets/customComponents/designExamples/gradientExamples";
import {
  HeadingLg,
  HeadingMd,
  HeadingSm,
  HeadingXl,
  HeadingXs,
  Text10xl,
  Text2xl,
  Text3xl,
  Text4xl,
  Text5xl,
  Text6xl,
  Text7xl,
  Text8xl,
  Text9xl,
  TextLg,
  TextMd,
  TextSm,
  TextXl,
  TextXs,
} from "../../assets/customComponents/textComponents";

export default function DesignScreen() {
  const fontWeights = [
    "light",
    "",
    "lightItalic",
    "thin",
    "thinItalic",
    "regular",
    "italic",
    "bold",
    "boldItalic",
    "dark",
    "darkItalic",
  ];
  return (
    <GradientOne>
      <PaddedFullStack>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          {/* ------------------------ GRADIENTS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 10 }}
          >
            <HeadingXl>Color Scheme Gradients</HeadingXl>
            <GradientExamples />
          </VStackFullWidth>
          {/* ------------------------ TEXT SIZES ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 10 }}
          >
            <HeadingLg>Preset Text & Heading Sizes</HeadingLg>
            <WrapFullWidth
              style={{
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <TextXs>TextXs</TextXs>
              <TextSm>TextSm</TextSm>
              <TextMd>TextMd</TextMd>
              <TextLg>TextLg</TextLg>
              <TextXl>TextXl</TextXl>
              <Text2xl>Text2xl</Text2xl>
              <Text3xl>Text3xl</Text3xl>
              <Text4xl>Text4xl</Text4xl>
              <Text5xl>Text5xl</Text5xl>
              <Text6xl>Text6xl</Text6xl>
              <Text7xl>Text7xl</Text7xl>
              <Text8xl>Text8xl</Text8xl>
              <Text9xl>Text9xl</Text9xl>
              <Text10xl>Text10xl</Text10xl>
            </WrapFullWidth>
            <WrapFullWidth
              style={{
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <HeadingXs>HeadingXs</HeadingXs>
              <HeadingSm>HeadingSm</HeadingSm>
              <HeadingMd>HeadingMd</HeadingMd>
              <HeadingLg>HeadingLg</HeadingLg>
              <HeadingXl>HeadingXl</HeadingXl>
            </WrapFullWidth>
          </VStackFullWidth>
          {/* ------------------------ FONT WEIGHTS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 10 }}
          >
            <HeadingLg>Font Weights & Styles</HeadingLg>
            <WrapFullWidth>
              {fontWeights.map((weight) => (
                <Flex style={{ padding: 10 }} key={weight}>
                  <TextXl style={{ fontFamily: weight }}>{weight}</TextXl>
                </Flex>
              ))}
            </WrapFullWidth>
          </VStackFullWidth>
        </ScrollView>
      </PaddedFullStack>
    </GradientOne>
  );
}
