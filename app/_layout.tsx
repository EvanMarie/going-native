import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { setCustomText } from "react-native-global-props";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    dark: require("../assets/fonts/Lato/Lato-Black.ttf"),
    darkItalic: require("../assets/fonts/Lato/Lato-BlackItalic.ttf"),
    bold: require("../assets/fonts/Lato/Lato-Bold.ttf"),
    boldItalic: require("../assets/fonts/Lato/Lato-BoldItalic.ttf"),
    italic: require("../assets/fonts/Lato/Lato-Italic.ttf"),
    light: require("../assets/fonts/Lato/Lato-Light.ttf"),
    lightItalic: require("../assets/fonts/Lato/Lato-LightItalic.ttf"),
    regular: require("../assets/fonts/Lato/Lato-Regular.ttf"),
    thin: require("../assets/fonts/Lato/Lato-Thin.ttf"),
    thinItalic: require("../assets/fonts/Lato/Lato-ThinItalic.ttf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "regular", // Set your default font family
    },
  };

  setCustomText(customTextProps);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
