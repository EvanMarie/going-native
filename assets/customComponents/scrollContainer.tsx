import React from "react";
import { StyleSheet, View } from "react-native";

import { TextLg, TextMd, TextSm } from "./textComponents";
import { boxShadows, textShadows } from "@/constants/shadows";
import { col } from "@/constants/Colors_Styles";
import VStackFullWidth, { FlexFull } from "./containers";
import { bordersB, bordersT } from "@/constants/borders";
import { Ionicons } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function ScrollViewExample() {
  return (
    <>
      {Array.from({ length: 300 }).map((_, index) => (
        <View
          key={index}
          style={[boxShadows.lg, bordersT.borderTsm800, bordersB.borderBsm800]}
        >
          <FlexFull>
            <View
              style={[
                {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: col[400],
                  padding: 10,
                },
              ]}
            >
              <VStackFullWidth style={{ gap: 0 }}>
                <FlexFull style={{ justifyContent: "space-between" }}>
                  <TextLg padding={3} style={textShadows.rightSm}>
                    {"Person " + index + 1}
                  </TextLg>
                  <TabBarIcon name="menu" color={col["light"]} />
                </FlexFull>
                <TextMd padding={3}>
                  {"Information about Person " + index + 1}
                </TextMd>
                <TextSm padding={3}>
                  {"Further details about Person " + index + 1}
                </TextSm>
              </VStackFullWidth>
            </View>
          </FlexFull>
        </View>
      ))}
    </>
  );
}
