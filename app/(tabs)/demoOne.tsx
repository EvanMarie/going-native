import ParallaxScrollView from "@/components/ParallaxScrollView";
import { GradientSeven } from "../../assets/customComponents/gradients";

import { Text3xl, TextMd } from "../../assets/customComponents/textComponents";
import { Image } from "react-native";
import { col } from "@/constants/Colors_Styles";
import VStackFullWidth, {
  FlexFull,
} from "@/assets/customComponents/containers";
import CustomParallaxScroll from "@/assets/customComponents/CustomParallaxScroll";

export default function DemoOne() {
  return (
    <GradientSeven>
      <CustomParallaxScroll
        headerImage={
          <Image source={require("../../assets/images/header.webp")} />
        }
        headerBackgroundColor={{ dark: col[800], light: col[200] }}
      >
        <GradientSeven>
          <VStackFullWidth style={{ gap: 10, paddingVertical: 10 }}>
            <FlexFull style={{ height: 300, backgroundColor: col[200] }}>
              <Text3xl>ParallaxScrollView</Text3xl>
            </FlexFull>
            <FlexFull style={{ height: 300, backgroundColor: col[200] }}>
              <Text3xl>ParallaxScrollView</Text3xl>
            </FlexFull>
            <FlexFull style={{ height: 300, backgroundColor: col[200] }}>
              <Text3xl>ParallaxScrollView</Text3xl>
            </FlexFull>
            <FlexFull style={{ height: 300, backgroundColor: col[200] }}>
              <Text3xl>ParallaxScrollView</Text3xl>
            </FlexFull>
          </VStackFullWidth>
        </GradientSeven>
      </CustomParallaxScroll>
    </GradientSeven>
  );
}
