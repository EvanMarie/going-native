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
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
    <LinearGradient colors={[col[700], col[800]]} style={styles.gradient}>
      <StatusBar animated={true} />

      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaView>
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
