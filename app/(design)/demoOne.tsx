import {
  GradientOne,
  GradientSix,
} from "../../assets/customComponents/gradients";
import {
  Text2xl,
  TextMd,
  TextSm,
} from "../../assets/customComponents/textComponents";
import { Image } from "react-native";
import { col } from "@/constants/Colors_Styles";
import VStackFullWidth, {
  FlexFull,
} from "@/assets/customComponents/containers";
import CustomParallaxScroll from "@/assets/customComponents/customParallaxScroll";
import { borders, bordersT } from "@/constants/borders";
import { boxShadows, textShadows } from "@/constants/shadows";
import { CustomCollapsible } from "@/assets/customComponents/customCollpsible";
import { exampleText } from "@/assets/customComponents/designExamples/textLineHeights";

function ExampleContainer({
  item,
}: {
  item: { lineXl: string; lineMd: string; lineSm: string };
}) {
  return (
    <GradientOne style={[borders.borderSm900, boxShadows.glowSm200]}>
      <FlexFull
        style={[
          {
            height: 175,
            borderRadius: 10,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <VStackFullWidth>
          <Text2xl style={[textShadows.rightSm, { color: col[900] }]}>
            {item.lineXl}
          </Text2xl>
          <TextMd style={{ color: col[900] }}>{item.lineMd}</TextMd>
          <TextSm style={{ color: col[900] }}>{item.lineSm}</TextSm>
        </VStackFullWidth>
      </FlexFull>
    </GradientOne>
  );
}

const sampleItems = [
  {
    itemXl: "Item One",
    itemMd: "Information about Item One",
    itemSm: "More information about Item One",
  },
  {
    itemXl: "Item Two",
    itemMd: "Information about Item Two",
    itemSm: "More information about Item Two",
  },
  {
    itemXl: "Item Three",
    itemMd: "Information about Item Three",
    itemSm: "More information about Item Three",
  },
  {
    itemXl: "Item Four",
    itemMd: "Information about Item Four",
    itemSm: "More information about Item Four",
  },
  {
    itemXl: "Item Five",
    itemMd: "Information about Item Five",
    itemSm: "More information about Item Five",
  },
  {
    itemXl: "Item Six",
    itemMd: "Information about Item Six",
    itemSm: "More information about Item Six",
  },
];

export default function DemoOne() {
  return (
    <CustomParallaxScroll
      headerHeight={300}
      headerImage={
        <Image source={require("../../assets/images/header.webp")} />
      }
      headerBackgroundColor={{ dark: col[800], light: col[200] }}
      headerText="Parallax Header & Custom Collapsible Container"
    >
      <GradientSix>
        <VStackFullWidth style={[bordersT.borderTxs800]}>
          <CustomCollapsible title="Collapsible Container One">
            <TextMd>{exampleText}</TextMd>
          </CustomCollapsible>
          <CustomCollapsible title="Collapsible Container Two">
            <TextMd>{exampleText}</TextMd>
          </CustomCollapsible>
          <CustomCollapsible title="Collapsible Container Three">
            <TextMd>{exampleText}</TextMd>
          </CustomCollapsible>
          <CustomCollapsible title="Collapsible Container Four">
            <TextMd>{exampleText}</TextMd>
          </CustomCollapsible>
          <CustomCollapsible title="Collapsible Container Five">
            <TextMd>{exampleText}</TextMd>
          </CustomCollapsible>
        </VStackFullWidth>
      </GradientSix>
    </CustomParallaxScroll>
  );
}
