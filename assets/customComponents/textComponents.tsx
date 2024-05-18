import React from "react";
import { col } from "@/constants/Colors_Styles";
import { StyleProp, Text, TextStyle, StyleSheet, Platform } from "react-native";

const systemFont = Platform.select({
  ios: "System", // 'San Francisco' on iOS
  android: "Roboto", // 'Roboto' on Android
});

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
      android: "Roboto-Medium",
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
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 13 }, style]}>{children}</Text>;
}

export function TextSm({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 17 }, style]}>{children}</Text>;
}

export function TextMd({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text style={[{ fontSize: 21, lineHeight: 25 }, style]}>{children}</Text>
  );
}

export function TextLg({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 25 }, style]}>{children}</Text>;
}

export function TextXl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 29 }, style]}>{children}</Text>;
}

export function Text2xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 33 }, style]}>{children}</Text>;
}

export function Text3xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 37 }, style]}>{children}</Text>;
}

export function Text4xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 41 }, style]}>{children}</Text>;
}

export function Text5xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 45 }, style]}>{children}</Text>;
}

export function Text6xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 49 }, style]}>{children}</Text>;
}

export function Text7xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 53 }, style]}>{children}</Text>;
}

export function Text8xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 57 }, style]}>{children}</Text>;
}

export function Text9xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 61 }, style]}>{children}</Text>;
}

export function Text10xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 65 }, style]}>{children}</Text>;
}

// HEADINGS COMPONENTS AND STYLES

const headingColor = col[700];

export function HeadingXs({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 16, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={
        (fontStyles.semiBold, [{ fontSize: 20, color: headingColor }, style])
      }
    >
      {children}
    </Text>
  );
}

export function HeadingMd({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 24, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 28, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 32, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 36, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 40, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 44, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 48, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 52, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 56, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 60, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 64, color: headingColor },
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
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      style={[
        fontStyles.semiBold,
        { fontSize: 68, color: headingColor },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
