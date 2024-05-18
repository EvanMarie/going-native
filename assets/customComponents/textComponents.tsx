import { headingColor, headingWeight } from "@/constants/Colors_Styles";
import { StyleProp, Text, TextStyle } from "react-native";

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
  return <Text style={[{ fontSize: 21 }, style]}>{children}</Text>;
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
        { fontSize: 16, fontWeight: headingWeight, color: headingColor },
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
      style={[
        { fontSize: 20, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 24, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 28, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 32, fontWeight: headingWeight, color: headingColor },
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
        { fontSize: 36, fontWeight: headingWeight, color: headingColor },
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
