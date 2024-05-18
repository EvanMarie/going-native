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
  Heading10xl,
  Heading2xl,
  Heading3xl,
  Heading4xl,
  Heading5xl,
  Heading6xl,
  Heading7xl,
  Heading8xl,
  Heading9xl,
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
  fontStyles,
} from "../../assets/customComponents/textComponents";
import { col } from "@/constants/Colors_Styles";
import { boxShadows, textShadows } from "@/constants/shadows";

export default function DesignScreen() {
  const fontWeights = [
    { style: fontStyles.regular, label: "fontStyles.regular" },
    { style: fontStyles.bold, label: "fontStyles.bold" },
    { style: fontStyles.italic, label: "fontStyles.italic" },
    { style: fontStyles.light, label: "fontStyles.light" },
    { style: fontStyles.thin, label: "fontStyles.thin" },
    { style: fontStyles.medium, label: "fontStyles.medium" },
    { style: fontStyles.semiBold, label: "fontStyles.semiBold" },
    { style: fontStyles.black, label: "fontStyles.black" },
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
              <Heading2xl>Heading2xl</Heading2xl>
              <Heading3xl>Heading3xl</Heading3xl>
              <Heading4xl>Heading4xl</Heading4xl>
              <Heading5xl>Heading5xl</Heading5xl>
              <Heading6xl>Heading6xl</Heading6xl>
              <Heading7xl>Heading7xl</Heading7xl>
              <Heading8xl>Heading8xl</Heading8xl>
              <Heading9xl>Heading9xl</Heading9xl>
              <Heading10xl>Heading10xl</Heading10xl>
            </WrapFullWidth>
          </VStackFullWidth>
          {/* ------------------------ FONT WEIGHTS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 10 }}
          >
            <HeadingLg>Font Weights & Styles</HeadingLg>
            <WrapFullWidth
              style={{
                gap: 10,
                borderRadius: 10,
                justifyContent: "space-evenly",
              }}
            >
              {fontWeights.map((fontStyle, index) => (
                <Flex
                  key={index}
                  style={[
                    {
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      backgroundColor: col[600],
                      borderRadius: 10,
                    },
                    boxShadows["md"],
                  ]}
                >
                  <TextMd
                    style={[
                      { color: col[100] },
                      fontStyle.style,
                      textShadows.leftMd,
                    ]}
                  >
                    {fontStyle.label}
                  </TextMd>
                </Flex>
              ))}
            </WrapFullWidth>
          </VStackFullWidth>
        </ScrollView>
      </PaddedFullStack>
    </GradientOne>
  );
}
