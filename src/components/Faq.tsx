import { Accordion, Container, Span, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Rule from "./Rule";

const FAQS = [
  {
    q: "Which estates are covered?",
    a: "We're rolling out estate by estate. Tell us yours when you join the waitlist and we'll let you know as soon as Kampung Ride is live near you. Matches are always with someone from your own estate — you're never paired with a stranger from across town.",
  },
  {
    q: "How much does it cost?",
    a: "Riders split fuel and parking directly with the driver — there's no markup and no surge pricing. You and your driver agree the amount before the ride.",
  },
  {
    q: "Do I need a car to join?",
    a: "No — most people join as riders. If you already drive to work, you can also offer seats to neighbours.",
  },
  {
    q: "Do I have to commit to every day?",
    a: "No — join for the days that work for you. Ride occasionally, or set up a standing match for your regular commute.",
  },
  {
    q: "What if my match falls through?",
    a: "You're never locked into one ride. Cancel with notice and we'll help you find another neighbour heading your way, or fall back to your usual commute for the day.",
  },
];

export default function Faq() {
  const items = FAQS.map((item, i) => (
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
      <Eyebrow>Questions</Eyebrow>
      <Accordion.Root variant="plain" collapsible>
        {items}
      </Accordion.Root>
    </Container>
  );
}
