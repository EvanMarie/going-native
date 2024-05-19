import React from "react";
import { col } from "@/constants/Colors_Styles";
import { StyleProp, Text, TextStyle, StyleSheet, Platform } from "react-native";

const systemFont = Platform.select({
  ios: "System", // 'San Francisco' on iOS
  android: "Roboto", // 'Roboto' on Android
});

export const headingColor = col[200];
export const defaultTextColor = col["light"];

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

export function TextXs({
  children,
  textColor = defaultTextColor,
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 13, lineHeight: 13, padding: padding, color: textColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 17, lineHeight: 17, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 21, lineHeight: 21, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 25, lineHeight: 25, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 29, lineHeight: 29, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 33, lineHeight: 33, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 37, lineHeight: 37, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 41, lineHeight: 41, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 45, lineHeight: 45, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 49, lineHeight: 49, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 53, lineHeight: 53, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 57, lineHeight: 57, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 61, lineHeight: 61, padding: padding, color: textColor },
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
  style,
  padding = 7,
}: {
  children: React.ReactNode;
  textColor?: string;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        { fontSize: 65, lineHeight: 65, padding: padding, color: textColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 16, lineHeight: 16, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={
        (fontStyles.semiBold,
        [
          {
            fontSize: 20,
            lineHeight: 20,
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 24, lineHeight: 24, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 28, lineHeight: 28, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 32, lineHeight: 32, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 36, lineHeight: 36, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 40, lineHeight: 40, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 44, lineHeight: 44, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 48, lineHeight: 48, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 52, lineHeight: 52, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 56, lineHeight: 56, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 60, lineHeight: 60, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  padding?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 64, lineHeight: 64, padding: padding, color: headingColor },
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
  padding = 7,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  padding?: number;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 68, lineHeight: 68, padding: padding, color: headingColor },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
