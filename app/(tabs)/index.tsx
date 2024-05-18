import { Text } from "react-native";
import { CenterSafeFull, FlexColSafeFull } from "./components/containers";
import { col } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <FlexColSafeFull style={{ backgroundColor: col[300]}}>
      <Text>Index</Text>
    </FlexColSafeFull>
  );
}
