import type { PropsWithChildren, ReactElement } from "react";
import { SafeAreaView, StyleSheet, View, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { CustomComponentView } from "./customComponentView";
import { TextXl, fontStyles } from "./textComponents";
import { col } from "@/constants/Colors_Styles";
import { textShadows } from "@/constants/shadows";

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  headerHeight?: number;
  headerOverlayColor?: string;
  headerText?: string;
  headerTextColor?: string;
}>;

export default function CustomParallaxScroll({
  children,
  headerImage,
  headerBackgroundColor,
  headerText,
  headerTextColor = col["light"],
  headerOverlayColor,
  headerHeight = 250,
}: Props) {
  const HEADER_HEIGHT = headerHeight;
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: headerHeight,
      overflow: "hidden",
    },
    content: {
      flex: 1,
      overflow: "hidden",
    },
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <CustomComponentView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        {headerText && (
          <View
            style={{
              position: "absolute",
              height: headerHeight,
              width: "100%",
              zIndex: 1,
              top: 0,
              display: "flex",
              flex: 1,
              backgroundColor: headerOverlayColor,
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <TextXl style={[{ color: headerTextColor }, fontStyles.bold]}>
              {headerText}
            </TextXl>
          </View>
        )}
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <CustomComponentView style={styles.content}>
          {children}
        </CustomComponentView>
      </Animated.ScrollView>
    </CustomComponentView>
  );
}
