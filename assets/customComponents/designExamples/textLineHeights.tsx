import VStackFullWidth, { VStack } from "../containers";
import { HeadingMd, TextMd } from "../textComponents";

export const exampleText =
  "Bacon ipsum dolor amet ribeye doner alcatra, pork belly shankle venison brisket biltong kielbasa. Cupcake ipsum dolor sit amet marshmallow topping, gummi bears cookie muffin jelly beans. ";

export function TextLineHeightsExample() {
  return (
    <VStackFullWidth>
      <HeadingMd>lineHeight="xs"</HeadingMd>
      <TextMd lineHeight="xs">{exampleText}</TextMd>
      <HeadingMd>lineHeight="sm"</HeadingMd>
      <TextMd lineHeight="sm">{exampleText}</TextMd>
      <HeadingMd>lineHeight="md"</HeadingMd>
      <TextMd lineHeight="md">{exampleText}</TextMd>
      <HeadingMd>lineHeight="lg"</HeadingMd>
      <TextMd lineHeight="lg">{exampleText}</TextMd>
      <HeadingMd>lineHeight="xl"</HeadingMd>
      <TextMd lineHeight="xl">{exampleText}</TextMd>
      <HeadingMd>lineHeight="xxl"</HeadingMd>
      <TextMd lineHeight="xxl">{exampleText}</TextMd>
    </VStackFullWidth>
  );
}
