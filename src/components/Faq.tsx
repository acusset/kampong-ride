import { copy } from "@/lib/copy";
import { Accordion, Container, Span, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Rule from "./Rule";

export default function Faq() {
  const items = copy.faq.items.map((item, i) => (
    <Accordion.Item key={item.q} value={item.q}>
      {i > 0 && <Rule />}
      <Accordion.ItemTrigger py="leading" cursor="pointer" gap="leading">
        <Span flex="1" textStyle="calloutTitle" textAlign="start">
          {item.q}
        </Span>
        <Accordion.ItemIndicator color="accent.solid">
          <ChevronDown size={20} />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent pb="leading">
        <Accordion.ItemBody>
          <Text textStyle="body" color="fg.subtle" maxW="52ch">
            {item.a}
          </Text>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  ));

  return (
    <Container as="section" id="faq" pt="leading2_5" pb="leading3">
      <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
      <Accordion.Root variant="plain" collapsible>
        {items}
      </Accordion.Root>
    </Container>
  );
}
