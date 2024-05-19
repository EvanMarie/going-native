import React, { useRef } from "react";
import { ScrollView } from "react-native";
import VStackFullWidth, {
  CenterHorizontalFull,
  Flex,
  FlexFull,
  PaddedFullStack,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import { GradientSeven } from "../../assets/customComponents/gradients";
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
import { bordersB, borders } from "@/constants/borders";
import CustomButton from "@/assets/customComponents/customButton";

export default function DesignScreen() {
  const gradientsRef = useRef(null);
  const textRef = useRef(null);
  const shadowsRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  const boxShadowList = [
    { style: boxShadows.xs, label: "boxShadows.xs" },
    { style: boxShadows.sm, label: "boxShadows.sm" },
    { style: boxShadows.md, label: "boxShadows.md" },
    { style: boxShadows.lg, label: "boxShadows.lg" },
    { style: boxShadows.xl, label: "boxShadows.xl" },
    { style: boxShadows.insetXs, label: "boxShadows.insetXs" },
    { style: boxShadows.insetSm, label: "boxShadows.insetSm" },
    { style: boxShadows.insetMd, label: "boxShadows.insetMd" },
    { style: boxShadows.insetLg, label: "boxShadows.insetLg" },
    { style: boxShadows.insetXl, label: "boxShadows.insetXl" },
    { style: boxShadows.glowXs100, label: "boxShadows.glowXs100" },
    { style: boxShadows.glowSm100, label: "boxShadows.glowSm100" },
    { style: boxShadows.glowMd100, label: "boxShadows.glowMd100" },
    { style: boxShadows.glowLg100, label: "boxShadows.glowLg100" },
    { style: boxShadows.glowXl100, label: "boxShadows.glowXl100" },
    { style: boxShadows.glowXs200, label: "boxShadows.glowXs200" },
    { style: boxShadows.glowSm200, label: "boxShadows.glowSm200" },
    { style: boxShadows.glowMd200, label: "boxShadows.glowMd200" },
    { style: boxShadows.glowLg200, label: "boxShadows.glowLg200" },
    { style: boxShadows.glowXl200, label: "boxShadows.glowXl200" },
    { style: boxShadows.glowXs300, label: "boxShadows.glowXs300" },
    { style: boxShadows.glowSm300, label: "boxShadows.glowSm300" },
    { style: boxShadows.glowMd300, label: "boxShadows.glowMd300" },
    { style: boxShadows.glowLg300, label: "boxShadows.glowLg300" },
    { style: boxShadows.glowXl300, label: "boxShadows.glowXl300" },
    { style: boxShadows.glowXs400, label: "boxShadows.glowXs400" },
    { style: boxShadows.glowSm400, label: "boxShadows.glowSm400" },
    { style: boxShadows.glowMd400, label: "boxShadows.glowMd400" },
    { style: boxShadows.glowLg400, label: "boxShadows.glowLg400" },
    { style: boxShadows.glowXl400, label: "boxShadows.glowXl400" },
    { style: boxShadows.glowXs500, label: "boxShadows.glowXs500" },
    { style: boxShadows.glowSm500, label: "boxShadows.glowSm500" },
    { style: boxShadows.glowMd500, label: "boxShadows.glowMd500" },
    { style: boxShadows.glowLg500, label: "boxShadows.glowLg500" },
    { style: boxShadows.glowXl500, label: "boxShadows.glowXl500" },
    { style: boxShadows.glowXs600, label: "boxShadows.glowXs600" },
    { style: boxShadows.glowSm600, label: "boxShadows.glowSm600" },
    { style: boxShadows.glowMd600, label: "boxShadows.glowMd600" },
    { style: boxShadows.glowLg600, label: "boxShadows.glowLg600" },
    { style: boxShadows.glowXl600, label: "boxShadows.glowXl600" },
    { style: boxShadows.glowXs700, label: "boxShadows.glowXs700" },
    { style: boxShadows.glowSm700, label: "boxShadows.glowSm700" },
    { style: boxShadows.glowMd700, label: "boxShadows.glowMd700" },
    { style: boxShadows.glowLg700, label: "boxShadows.glowLg700" },
    { style: boxShadows.glowXl700, label: "boxShadows.glowXl700" },
    { style: boxShadows.glowXs800, label: "boxShadows.glowXs800" },
    { style: boxShadows.glowSm800, label: "boxShadows.glowSm800" },
    { style: boxShadows.glowMd800, label: "boxShadows.glowMd800" },
    { style: boxShadows.glowLg800, label: "boxShadows.glowLg800" },
    { style: boxShadows.glowXl800, label: "boxShadows.glowXl800" },
    { style: boxShadows.glowXs900, label: "boxShadows.glowXs900" },
    { style: boxShadows.glowSm900, label: "boxShadows.glowSm900" },
    { style: boxShadows.glowMd900, label: "boxShadows.glowMd900" },
    { style: boxShadows.glowLg900, label: "boxShadows.glowLg900" },
    { style: boxShadows.glowXl900, label: "boxShadows.glowXl900" },
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
      textColor: col[800],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glowMd,
      label: "textShadows.glowMd",
      textColor: col[800],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glowLg,
      label: "textShadows.glowLg",
      textColor: col[800],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glowXl,
      label: "textShadows.glowXl",
      textColor: col[800],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glow2xl,
      label: "textShadows.glow2xl",
      textColor: col[800],
      backgroundColor: col[900],
    },
    {
      style: textShadows.glow3xl,
      label: "textShadows.glow3xl",
      textColor: col[800],
      backgroundColor: col[900],
    },
  ];

  function HeaderSection({ title }: { title: string }) {
    return (
      <Flex style={[boxShadows.glowXs200, { padding: 5 }]}>
        <Flex
          style={[
            borders.borderXs500,
            {
              backgroundColor: col[800],
              padding: 10,
              borderRadius: 10,
            },
          ]}
        >
          <TextLg
            style={[
              fontStyles.semiBold,
              textShadows.left2xl,

              { color: col[200], textAlign: "center" },
            ]}
          >
            {title}
          </TextLg>
        </Flex>
      </Flex>
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
      <Flex style={[{ padding: 5 }]}>
        <Flex
          style={[
            borders.borderXxs200,
            {
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor: backgroundColor,
              borderRadius: 10,
            },
          ]}
        >
          <TextSm style={[{ color: textColor }, style, textShadow]}>
            {label}
          </TextSm>
        </Flex>
      </Flex>
    );
  }

  function BoxShadowContainer({
    shadow,
    label,
    textColor = col[100],
    backgroundColor = col[500],
  }: {
    shadow: any;
    label: string;
    textColor?: string;
    backgroundColor?: string;
  }) {
    return (
      <Flex style={[shadow, { padding: 5 }]}>
        <Flex
          style={[
            {
              paddingHorizontal: 8,
              paddingVertical: 5,
              backgroundColor: backgroundColor,
              borderRadius: 10,
            },
          ]}
        >
          <TextXs style={[{ color: textColor }]}>{label}</TextXs>
        </Flex>
      </Flex>
    );
  }

  return (
    <GradientSeven>
      <PaddedFullStack style={{ paddingTop: 80 }}>
        <FlexFull
          style={[
            {
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              backgroundColor: col[800],
              height: 80,
              zIndex: 20,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "flex-end",
            },
            bordersB.borderBxs400,
          ]}
        >
          <CustomButton
            text="Gradients"
            scrollTo={() => scrollToSection(gradientsRef)}
          />
          <CustomButton text="Text" scrollTo={() => scrollToSection(textRef)} />
          <CustomButton
            text="Shadows"
            scrollTo={() => scrollToSection(shadowsRef)}
          />
        </FlexFull>
        <ScrollView>
          {/* ------------------------ GRADIENTS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
            ref={gradientsRef}
          >
            <HeaderSection title="Color Scheme Gradients" />
            <GradientExamples />
          </VStackFullWidth>
          {/* ------------------------ TEXT SIZES ------------------------ */}
          <VStackFullWidth
            ref={textRef}
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
            ref={shadowsRef}
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
          {/* ------------------------ FONT WEIGHTS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection title="Box Shadows & Glows" />
            <WrapFullWidth
              style={{
                gap: 10,
                borderRadius: 10,
                justifyContent: "space-evenly",
              }}
            >
              {boxShadowList.map((boxShadow, index) => (
                <BoxShadowContainer
                  key={index}
                  shadow={boxShadow.style}
                  label={boxShadow.label}
                />
              ))}
            </WrapFullWidth>
          </VStackFullWidth>
        </ScrollView>
      </PaddedFullStack>
    </GradientSeven>
  );
}
