import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CenterSafeFull } from "./components/containers";
import { col } from "@/constants/Colors";

export default function TabTwoScreen() {
  return (
    <CenterSafeFull style={{ backgroundColor: col[500] }}>
      <Text>Tab One</Text>
    </CenterSafeFull>
  );
}
