import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import CustomButton from "./customButton";
import { col } from "@/constants/Colors_Styles";
import { bordersB } from "@/constants/borders";

export default function NavBar({
  buttons,
  style,
}: {
  buttons: {
    buttonText: string;
    onPress?: () => void;
    scrollTo?: () => void;
  }[];
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: col[800],
        },
        bordersB.borderBxs400,
      ]}
    >
      <CustomButton text="Gradients" scrollTo={scrollTo} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    zIndex: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  section: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
});
