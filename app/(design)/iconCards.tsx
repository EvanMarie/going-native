import React from "react";
import VStackFullWidth, {
  VStack,
  WrapFullWidth,
} from "@/assets/customComponents/containers";
import { GradientSeven } from "../../assets/customComponents/gradients";
import { TextSm, TextXl } from "../../assets/customComponents/textComponents";
import { col } from "@/constants/Colors_Styles";
import ImageIconCard from "@/assets/customComponents/imageIconCard";
import { ScrollView } from "react-native";

export default function IconCards() {
  const iconImages = [
    {
      link: require("../../assets/images/example-icons/01.png"),
      name: "Icon One",
    },
    {
      link: require("../../assets/images/example-icons/02.png"),
      name: "Icon Two",
    },
    {
      link: require("../../assets/images/example-icons/03.png"),
      name: "Icon Three",
    },
    {
      link: require("../../assets/images/example-icons/04.png"),
      name: "Icon Four",
    },
    {
      link: require("../../assets/images/example-icons/05.png"),
      name: "Icon Five",
    },
    {
      link: require("../../assets/images/example-icons/06.png"),
      name: "Icon Six",
    },
    {
      link: require("../../assets/images/example-icons/07.png"),
      name: "Icon Seven",
    },
    {
      link: require("../../assets/images/example-icons/08.png"),
      name: "Icon Eight",
    },
    {
      link: require("../../assets/images/example-icons/09.png"),
      name: "Icon Nine",
    },
  ];

  return (
    <GradientSeven>
      <VStackFullWidth style={{ paddingTop: 50, gap: 20 }}>
        <ScrollView style={{ width: "100%" }}>
          <TextXl
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: col[200],
            }}
          >
            Image Icon Cards
          </TextXl>
          <WrapFullWidth style={{ justifyContent: "space-evenly", gap: 15 }}>
            {iconImages.map((icon, index) => (
              <VStack key={index}>
                <ImageIconCard imageLink={icon.link} />
                <TextSm style={{ textAlign: "center", color: col[200] }}>
                  {icon.name}
                </TextSm>
              </VStack>
            ))}
          </WrapFullWidth>
        </ScrollView>
      </VStackFullWidth>
    </GradientSeven>
  );
}
