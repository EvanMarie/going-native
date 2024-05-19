import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { TextLg } from "./textComponents";
import { col } from "@/constants/Colors_Styles";
import { CustomComponentView } from "./customComponentView";

export function CustomCollapsible({
  children,
  title,
  paddingHorizontal = 10,
  paddingVertical = 5,
}: {
  children: React.ReactNode;
  title: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const styles = StyleSheet.create({
    heading: {
      paddingHorizontal: paddingHorizontal,
      paddingVertical: paddingVertical,
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    content: {
      paddingStart: 35,
    },
  });
  return (
    <CustomComponentView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={
            isOpen
              ? "chevron-down-circle-outline"
              : "chevron-forward-circle-outline"
          }
          size={26}
          color={col[200]}
        />
        <TextLg style={{ color: col[200] }}>{title}</TextLg>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </CustomComponentView>
  );
}
