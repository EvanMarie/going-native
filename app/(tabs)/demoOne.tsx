import ParallaxScrollView from "@/components/ParallaxScrollView";
import { GradientSeven } from "../../assets/customComponents/gradients";

import { Text3xl, TextMd } from "../../assets/customComponents/textComponents";
import { Image } from "react-native";

export default function DemoOne() {
  return (
    <GradientSeven>
      {/* <ParallaxScrollView
        headerImage={
          <Image source={require("../../assets/images/header.webp")} />
        }
        headerBackgroundColor={{ dark: "#000", light: "#fff" }}
      /> */}
      <Text3xl>ParallaxScrollView</Text3xl>
    </GradientSeven>
  );
}
