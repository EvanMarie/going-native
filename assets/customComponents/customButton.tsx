import { useNavigation } from "expo-router";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

export default function CustomButton({
  children,
  onPress,
  to,
  style,
  text,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  to?: string;
  style?: StyleProp<ViewStyle>;
  text: string;
}) {
  const navigate = useNavigate;
  const onPressButton = () => {
    if (to) {
      navigator.navigate(to);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {text}
    </TouchableOpacity>
  );
}
