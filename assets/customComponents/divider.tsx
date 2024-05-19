import { col } from "@/constants/Colors_Styles";
import { View } from "react-native";

export default function Divider({
  height = 1.5,
  width = "95%",
  color = col[130],
  margin,
  padding,
  border,
  borderRadius,
  style,
  ...props
}: {
  height?: number;
  width?: string | number;
  color?: string;
  margin?: number;
  padding?: number;
  border?: number;
  borderRadius?: number;
  style?: any;
  [key: string]: any;
}) {
  return (
    <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
      <View
        style={[
          {
            height,
            width,
            backgroundColor: color,
            margin,
            padding,
            border,
            borderRadius,
          },
          style,
        ]}
        {...props}
      />
    </View>
  );
}
