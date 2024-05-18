import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CenterSafe } from "./components/containers";
import { colors } from "@/assets/colors";

export default function TabTwoScreen() {
  return (
    <CenterSafe style={{ backgroundColor: colors[500] }}>
      <Text>Tab One</Text>
    </CenterSafe>
  );
}
