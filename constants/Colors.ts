/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const col = {
  100: "#cbf5d4",
  200: "#40c5c7",
  300: "#5D8A66",
  400: "#1A6566",
  500: "#21445B",
  600: "#323050",
  700: "#45214A",
  800: "#1f1d40",
  900: "#210f24",
};

const tintColorLight = col[400];
const tintColorDark = col[600];

export const Colors = {
  light: {
    text: col[900],
    background: col[200],
    tint: tintColorLight,
    icon: col[600],
    tabIconDefault: col[500],
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: col[100],
    background: col[800],
    tint: tintColorDark,
    icon: col[800],
    tabIconDefault: col[800],
    tabIconSelected: tintColorDark,
  },
};


