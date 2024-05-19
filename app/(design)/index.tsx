import React, { useRef } from "react";
import { ScrollView, View, StyleSheet, findNodeHandle } from "react-native";
import VStackFullWidth, {
  CenterHorizontalFull,
  Flex,
  FlexFull,
  PaddedFullStack,
  VStack,
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
import { bordersB, borders, bordersT, radii } from "@/constants/borders";
import CustomButton from "@/assets/customComponents/customButton";
import { TextLineHeightsExample } from "@/assets/customComponents/designExamples/textLineHeights";
import Divider from "@/assets/customComponents/divider";

export default function DesignScreen() {
  const colorScheme = [
    {
      color: col["light"],
      label: 'col["light"]',
      textColor: col["dark"],
      textShadow: textShadows.glowSm,
    },
    {
      color: col["dark"],
      label: 'col["dark"]',
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[100],
      label: "col[100]",
      textColor: col["dark"],
      textShadow: textShadows.glowSm,
    },
    {
      color: col[200],
      label: "col[200]",
      textColor: col["dark"],
      textShadow: textShadows.glowSm,
    },
    {
      color: col[300],
      label: "col[300]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[400],
      label: "col[400]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[500],
      label: "col[500]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[600],
      label: "col[600]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[700],
      label: "col[700]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[800],
      label: "col[800]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
    {
      color: col[900],
      label: "col[900]",
      textColor: col["light"],
      textShadow: textShadows.leftMd,
    },
  ];
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
            borders.borderSm900,
            {
              backgroundColor: col[300],
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 14,
            },
          ]}
        >
          <TextLg
            style={[
              fontStyles.bold,
              textShadows.glowSm,

              { color: col["dark"], textAlign: "center" },
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
    border = borders.borderXs200,
  }: {
    style: any;
    label: string;
    textColor?: string;
    backgroundColor?: string;
    textShadow?: any;
    border?: any;
  }) {
    return (
      <Flex style={[{ padding: 5 }]}>
        <Flex
          style={[
            border,
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

  const fullBorderExamples = [
    {
      border: borders.borderXs300,
      label: "borders.borderXs300",
    },
    { border: borders.borderSm300, label: "borders.borderSm300" },
    { border: borders.borderMd300, label: "borders.borderMd300" },
    { border: borders.borderLg300, label: "borders.borderLg300" },
    { border: borders.borderXl300, label: "borders.borderXl300" },
  ];

  const bottomBorderExamples = [
    {
      border: bordersB.borderBxs300,
      label: "bordersB.borderBxs300",
    },
    { border: bordersB.borderBsm300, label: "bordersB.borderBsm300" },
    { border: bordersB.borderBmd300, label: "bordersB.borderBmd300" },
    { border: bordersB.borderBlg300, label: "bordersB.borderBlg300" },
    { border: bordersB.borderBxl300, label: "bordersB.borderBxl300" },
  ];

  const topBorderExamples = [
    {
      border: bordersT.borderTxs300,
      label: "bordersT.borderTxs300",
    },
    { border: bordersT.borderTsm300, label: "bordersT.borderTsm300" },
    { border: bordersT.borderTmd300, label: "bordersT.borderTmd300" },
    { border: bordersT.borderTlg300, label: "bordersT.borderTlg300" },
    { border: bordersT.borderTxl300, label: "bordersT.borderTxl300" },
  ];

  return (
    <GradientSeven>
      <PaddedFullStack>
        <ScrollView>
          <CenterHorizontalFull>
            <HeadingLg style={[{ textAlign: "center" }]}>
              Preset Design Components
            </HeadingLg>
          </CenterHorizontalFull>
          <Divider />
          {/* ------------------------ COLOR SCHEME ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection title="Color Scheme" />
            <TextSm>
              The following color scheme colors are also available in varying
              opacities, such as col[110], col[120], etc.{" "}
            </TextSm>
            <WrapFullWidth
              style={{
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
              }}
            >
              {colorScheme.map((color, index) => (
                <TextExampleContainer
                  key={index}
                  style={fontStyles.regular}
                  label={color.label}
                  textColor={color.textColor}
                  backgroundColor={color.color}
                  border={borders.borderXs900}
                  textShadow={color.textShadow}
                />
              ))}
            </WrapFullWidth>
          </VStackFullWidth>
          {/* ------------------------ GRADIENTS ------------------------ */}
          <Divider />
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection title="Color Scheme Gradients" />
            <GradientExamples />
          </VStackFullWidth>
          <Divider />
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
            <Divider />
            {/* ------------------------ TEXT LINE HEIGHTS ------------------------ */}
            <VStackFullWidth
              style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
            >
              <HeaderSection title="Text Line Heights" />
              <TextSm style={{ color: col[300] }}>
                Comparable line heights are available for heights: xs, sm, md,
                lg, xl, and xxl for all text and heading components. These
                examples use text size md.
              </TextSm>
              <TextLineHeightsExample />
            </VStackFullWidth>
            <Divider />
            {/* ------------------------ HEADINGS ------------------------ */}
            <VStackFullWidth
              style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
            >
              <HeaderSection title="Headings" />
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
          </VStackFullWidth>
          <Divider />
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
          <Divider />
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
          <Divider />
          {/* ------------------------ BORDERS ------------------------ */}
          <VStackFullWidth
            style={{ alignItems: "center", gap: 10, paddingVertical: 20 }}
          >
            <HeaderSection title="Borders" />
            <TextSm>
              Each of the following are available in all theme colors using the
              similar variable names.
            </TextSm>
            <WrapFullWidth
              style={{
                gap: 15,
                borderRadius: 10,
                justifyContent: "space-evenly",
              }}
            >
              {fullBorderExamples.map((border, index) => (
                <View
                  key={index}
                  style={[
                    {
                      padding: 5,
                      alignItems: "center",
                      borderRadius: 10,
                    },
                    border.border,
                  ]}
                >
                  <TextXs style={{ color: col[100] }}>{border.label}</TextXs>
                </View>
              ))}
              {bottomBorderExamples.map((border, index) => (
                <View
                  key={index}
                  style={[
                    {
                      padding: 5,
                      alignItems: "center",
                      borderRadius: 10,
                    },
                    border.border,
                  ]}
                >
                  <TextXs style={{ color: col[100] }}>{border.label}</TextXs>
                </View>
              ))}
              {topBorderExamples.map((border, index) => (
                <View
                  key={index}
                  style={[
                    {
                      padding: 5,
                      alignItems: "center",
                      borderRadius: 10,
                    },
                    border.border,
                  ]}
                >
                  <TextXs style={{ color: col[100] }}>{border.label}</TextXs>
                </View>
              ))}
            </WrapFullWidth>
          </VStackFullWidth>
          <Divider />
        </ScrollView>
      </PaddedFullStack>
    </GradientSeven>
  );
}
