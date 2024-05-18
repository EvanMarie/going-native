import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CenterSafe } from "./components/containers";
import { colors } from "@/assets/colors";

export default function TabTwo() {
  return (
    <CenterSafe style={{ backgroundColor: colors[600] }}>
      <Text>Tab Two</Text>
    </CenterSafe>
  );
}
