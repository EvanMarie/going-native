import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CenterSafeFull } from "../../assets/customComponents/containers";
import { col } from "@/constants/Colors_Styles";
import { GradientSeven } from "@/assets/customComponents/gradients";
import { TextXl } from "@/assets/customComponents/textComponents";

export default function TabTwo() {
  return (
    <GradientSeven>
      <TextXl>Tab Two</TextXl>
    </GradientSeven>
  );
}
