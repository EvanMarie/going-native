import { headingColor, headingWeight } from "@/constants/Colors_Styles";
import { StyleProp, Text, TextStyle } from "react-native";

export function TextSm({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 12 }, style]}>{children}</Text>;
}

export function TextMd({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 16 }, style]}>{children}</Text>;
}

export function TextLg({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 20 }, style]}>{children}</Text>;
}

export function TextXl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 24 }, style]}>{children}</Text>;
}

export function Text2xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 32 }, style]}>{children}</Text>;
}

export function Text3xl({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[{ fontSize: 40 }, style]}>{children}</Text>;
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
      style={[
        { fontSize: 12, fontWeight: headingWeight, color: headingColor },
        style,
      ]}
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
        { fontSize: 16, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 20, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 24, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 32, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 40, fontWeight: headingWeight, color: headingColor },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
