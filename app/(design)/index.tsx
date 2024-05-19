import React, { useRef } from "react";
import { ScrollView, View, Image } from "react-native";
import VStackFullWidth, {
  CenterHorizontalFull,
  Flex,
  FlexFull,
  PaddedFullStack,
  WrapFullWidth,
} from "../../assets/customComponents/containers";
import { GradientEight } from "../../assets/customComponents/gradients";
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
import { borders } from "@/constants/borders";
import { TextLineHeightsExample } from "@/assets/customComponents/designExamples/textLineHeights";
import Divider from "@/assets/customComponents/divider";
import CustomParallaxScroll from "@/assets/customComponents/customParallaxScroll";
import {
  BoxShadowContainer,
  HeaderSection,
  TextExampleContainer,
  bottomBorderExamples,
  boxShadowList,
  colorScheme,
  fontWeights,
  fullBorderExamples,
  textShadowList,
  topBorderExamples,
} from "@/assets/customComponents/designExamples/designExampleConsts";

export default function DesignScreen() {
  return (
    <CustomParallaxScroll
      headerHeight={170}
      headerImage={
        <Image source={require("../../assets/images/aurora.webp")} />
      }
      headerBackgroundColor={{ dark: col[800], light: col[200] }}
      headerText="Preset Design Components"
    >
      <GradientEight>
        <PaddedFullStack>
          <ScrollView>
            {/* ------------------------ COLOR SCHEME ------------------------ */}
            <VStackFullWidth style={{ alignItems: "center", gap: 10 }}>
              <FlexFull style={{ justifyContent: "center", paddingTop: 10 }}>
                <HeaderSection title="Color Scheme" />
              </FlexFull>
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
                Each of the following are available in all theme colors using
                the similar variable names.
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
      </GradientEight>
    </CustomParallaxScroll>
  );
}
