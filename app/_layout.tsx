import React, { useEffect } from "react";
import { setCustomText } from "react-native-global-props";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { col } from "@/constants/Colors_Styles";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    const customTextProps = {
      style: {
        fontFamily: Platform.select({
          ios: "System",
          android: "Roboto",
        }),
      },
    };
    setCustomText(customTextProps);
    SplashScreen.hideAsync();
  }, []);

  return (
    <LinearGradient colors={[col[800], col[900]]} style={styles.gradient}>
      <StatusBar animated={true} />

      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(design)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
});
