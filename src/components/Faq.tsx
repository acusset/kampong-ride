import { Box, Container, Text } from "@chakra-ui/react";
import Eyebrow from "./Eyebrow";
import Rule from "./Rule";
import { ChevronDown } from "lucide-react";

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
  return (
    <Container as="section" id="faq" pt="leading2_5" pb="leading3">
      <Eyebrow>Questions</Eyebrow>

      {FAQS.map((item, i) => (
        <Box key={item.q}>
          {i > 0 && <Rule />}
          <Box
            as="details"
            py="leading"
            css={{
              "& summary svg": { transition: "transform 0.15s ease" },
              "&[open] summary svg": { transform: "rotate(180deg)" },
            }}
          >
            <Box
              as="summary"
              cursor="pointer"
              listStyleType="none"
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
              gap="leading"
              css={{ "&::-webkit-details-marker": { display: "none" } }}
            >
              <Text as="span" textStyle="calloutTitle">
                {item.q}
              </Text>
              <Box flex="none" color="accent.solid">
                <ChevronDown size={20} />
              </Box>
            </Box>
            <Text textStyle="body" color="fg.subtle" mt="half" maxW="52ch">
              {item.a}
            </Text>
          </Box>
        </Box>
      ))}
    </Container>
  );
}
