import { Text } from "react-native";
import { colors } from "@/assets/colors";
import { CenterSafe } from "./components/containers";

export default function HomeScreen() {
  return (
    <CenterSafe style={{ backgroundColor: colors[300] }}>
      <Text>Index</Text>
    </CenterSafe>
  );
}
