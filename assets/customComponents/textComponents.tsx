import React from "react";
import { col } from "@/constants/Colors_Styles";
import { StyleProp, Text, TextStyle, StyleSheet, Platform } from "react-native";

const systemFont = Platform.select({
  ios: "System", // 'San Francisco' on iOS
  android: "Roboto", // 'Roboto' on Android
});

export const headingColor = col[200];
export const headingPadding = 7;
export const defaultTextColor = col["light"];
export const textPadding = 7;

export const fontStyles = StyleSheet.create({
  regular: {
    fontFamily: systemFont,
    fontWeight: "normal",
  },
  bold: {
    fontFamily: systemFont,
    fontWeight: "bold",
  },
  italic: {
    fontFamily: systemFont,
    fontStyle: "italic",
  },
  light: {
    fontFamily: systemFont,
    fontWeight: "300",
  },
  thin: {
    fontFamily: systemFont,
    fontWeight: "100",
  },
  medium: {
    fontFamily: systemFont,
    fontWeight: "500",
  },
  semiBold: {
    fontFamily: Platform.select({
      ios: systemFont,
      android: "Roboto",
    }),
    fontWeight: Platform.select({
      ios: "500",
      android: "500",
    }),
  },
  black: {
    fontFamily: systemFont,
    fontWeight: "900",
  },
});

export type TextType = {
  children: React.ReactNode;
  lineHeight?: LineHeight;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
};

export type LineHeight = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

function getLineHeights(fontSize: number): { [key in LineHeight]: number } {
  return {
    xs: fontSize + 4,
    sm: fontSize + 8,
    md: fontSize + 12,
    lg: fontSize + 16,
    xl: fontSize + 20,
    xxl: fontSize + 24,
  };
}

function getHeadingLineHeights(fontSize: number): {
  [key in LineHeight]: number;
} {
  return {
    xs: fontSize + 6,
    sm: fontSize + 12,
    md: fontSize + 18,
    lg: fontSize + 24,
    xl: fontSize + 30,
    xxl: fontSize + 36,
  };
}

export function TextXs({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 13;
  const lineHeights = getLineHeights(fontSize);

  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextSm({
  children,
  textColor = defaultTextColor,
  style,
  lineHeight = "xs",
  padding = textPadding,
}: TextType) {
  const fontSize = 17;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextMd({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 21;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextLg({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 25;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function TextXl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 29;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text2xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 33;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text3xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 37;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text4xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 41;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text5xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 45;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text6xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 49;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text7xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 53;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text8xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 57;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text9xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 61;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Text10xl({
  children,
  textColor = defaultTextColor,
  lineHeight = "xs",
  style,
  padding = textPadding,
}: TextType) {
  const fontSize = 65;
  const lineHeights = getLineHeights(fontSize);
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

// HEADINGS COMPONENTS AND STYLES

export function HeadingXs({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 16;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingSm({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 18;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={
        (fontStyles.semiBold,
        [
          {
            fontSize: fontSize,
            lineHeight: lineHeights[lineHeight],
            padding: padding,
            color: headingColor,
          },
          style,
        ])
      }
    >
      {children}
    </Text>
  );
}

export function HeadingMd({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 20;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingLg({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 24;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function HeadingXl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 28;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading2xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 32;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading3xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 36;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading4xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 40;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading5xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 44;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading6xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 48;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading7xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 52;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading8xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 56;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading9xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 60;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Heading10xl({
  children,
  style,
  padding = headingPadding,
  lineHeight = "xs",
}: TextType) {
  const fontSize = 68;
  const lineHeights = getHeadingLineHeights(fontSize);
  return (
    <Text
      style={[
        fontStyles.semiBold,
        {
          fontSize: fontSize,
          lineHeight: lineHeights[lineHeight],
          padding: padding,
          color: headingColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
