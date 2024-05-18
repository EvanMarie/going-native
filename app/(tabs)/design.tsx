import { ScrollView, Text, View } from "react-native";
import {
  CenterHorizontalFull,
  Flex,
  FlexFull,
  PaddedFullStack,
  VStackFullWidth,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import {
  GradientOne,
  GradientSeven,
} from "../../assets/customComponents/gradients";
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

  const textShadowList = [
    {
      style: textShadows.rightSm,
      label: "textShadows.rightSm",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.rightMd,
      label: "textShadows.rightMd",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.rightLg,
      label: "textShadows.rightLg",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.rightXl,
      label: "textShadows.rightXl",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.right2xl,
      label: "textShadows.right2xl",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.right3xl,
      label: "textShadows.right3xl",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.leftSm,
      label: "textShadows.leftSm",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.leftMd,
      label: "textShadows.leftMd",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.leftLg,
      label: "textShadows.leftLg",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.leftXl,
      label: "textShadows.leftXl",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.left2xl,
      label: "textShadows.left2xl",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.left3xl,
      label: "textShadows.left3xl",
      textColor: col[100],
      backgroundColor: col[200],
    },
    {
      style: textShadows.glowSm,
      label: "textShadows.glowSm",
      textColor: col[900],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glowMd,
      label: "textShadows.glowMd",
      textColor: col[900],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glowLg,
      label: "textShadows.glowLg",
      textColor: col[900],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glowXl,
      label: "textShadows.glowXl",
      textColor: col[900],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glow2xl,
      label: "textShadows.glow2xl",
      textColor: col[900],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glow3xl,
      label: "textShadows.glow3xl",
      textColor: col[900],
      backgroundColor: col[900],
    },
  ];

  function HeaderSection({ title }: { title: string }) {
    return (
      <CenterHorizontalFull
        style={{ backgroundColor: col[600], paddingVertical: 10 }}
      >
        <TextLg
          style={[
            fontStyles.semiBold,
            textShadows.left2xl,
            { color: col[100], textAlign: "center" },
          ]}
        >
          {title}
        </TextLg>
      </CenterHorizontalFull>
    );
  }

  function TextExampleContainer({
    style,
    label,
    textColor = col[100],
    backgroundColor = col[600],
    textShadow = textShadows.leftMd,
  }: {
    style: any;
    label: string;
    textColor?: string;
    backgroundColor?: string;
    textShadow?: any;
  }) {
    return (
      <Flex
        style={[
          {
            paddingHorizontal: 15,
            paddingVertical: 7,
            backgroundColor: backgroundColor,
            borderRadius: 10,
          },
          boxShadows["md"],
        ]}
      >
        <TextMd style={[{ color: textColor }, style, textShadow]}>
          {label}
        </TextMd>
      </Flex>
    );
  }

  return (
    <GradientSeven>
      <PaddedFullStack>
        <ScrollView>
          {/* ------------------------ GRADIENTS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection
              title="
                Color Scheme Gradients"
            />
            <GradientExamples />
          </VStackFullWidth>
          {/* ------------------------ TEXT SIZES ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection title="Preset Text & Heading Sizes" />
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
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection title="Font Weights & Styles" />
            <WrapFullWidth
              style={{
                gap: 10,
                borderRadius: 10,
                justifyContent: "space-evenly",
              }}
            >
              {fontWeights.map((fontStyle, index) => (
                <TextExampleContainer
                  key={index}
                  style={fontStyle.style}
                  label={fontStyle.label}
                />
              ))}
            </WrapFullWidth>
            <WrapFullWidth
              style={{
                gap: 10,
                borderRadius: 10,
                justifyContent: "space-evenly",
              }}
            >
              {textShadowList.map((textShadow, index) => (
                <TextExampleContainer
                  key={index}
                  style={fontStyles.regular}
                  label={textShadow.label}
                  textShadow={textShadow.style}
                  textColor={textShadow.textColor}
                  backgroundColor={textShadow.backgroundColor}
                />
              ))}
            </WrapFullWidth>
          </VStackFullWidth>
        </ScrollView>
      </PaddedFullStack>
    </GradientSeven>
  );
}
