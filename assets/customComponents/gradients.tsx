import { col } from "@/constants/Colors";
import { shadows } from "@/constants/boxShadows";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function GradientBackground({
  colors,
  children,
}: {
  colors: string[];
  children: React.ReactNode;
}) {
  return (
    <LinearGradient colors={colors} style={styles.gradient}>
      <View style={styles.inner}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export function GradientOne({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[100], col[200]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientTwo({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[200], col[300]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientThree({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[300], col[400]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientFour({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[400], col[500]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientFive({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[500], col[600]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientSix({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[600], col[700]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientSeven({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[700], col[800]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientEight({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[800], col[900]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientNine({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[900], col[100]]}>
      {children}
    </GradientBackground>
  );
}

export function GradientTen({ children }: { children?: React.ReactNode }) {
  return (
    <GradientBackground colors={[col[100], col[300]]}>
      {children}
    </GradientBackground>
  );
}
