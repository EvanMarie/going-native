import { Flex } from "@/assets/customComponents/containers";
import { GradientSeven } from "@/assets/customComponents/gradients";
import { TextMd, TextXl } from "@/assets/customComponents/textComponents";
import { borders } from "@/constants/borders";

export default function TabTwo() {
  return (
    <GradientSeven>
      <TextXl>Tab Two</TextXl>
      <Flex style={[borders.borderLg100, { borderRadius: 10 }]}>
        <TextMd>This</TextMd>
      </Flex>
    </GradientSeven>
  );
}
