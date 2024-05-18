/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const col = {
  light: "#ebffef",
  dark: "#2e1e30",
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

export const grads = {
  light100: `linear-gradient(135deg, ${col[100]} 0%, ${col[200]} 100%)`,
  light200: `linear-gradient(135deg, #5D8A66 0%, #1A6566 100%)`,
  light300: `linear-gradient(135deg, #21445B 0%, #323050 100%)`,
  light400: `linear-gradient(135deg, #45214A 0%, #1f1d40 100%)`,
  dark100: `linear-gradient(135deg, #cbf5d4 0%, #40c5c7 100%)`,
  dark200: `linear-gradient(135deg, #5D8A66 0%, #1A6566 100%)`,
  dark300: `linear-gradient(135deg, #21445B 0%, #323050 100%)`,
  dark400: `linear-gradient(135deg, #45214A 0%, #1f1d40 100%)`,
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


