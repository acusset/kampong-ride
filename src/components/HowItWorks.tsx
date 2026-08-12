import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Eyebrow from "./Eyebrow";

const STEPS = [
  {
    number: "01",
    title: "Tell us your estate",
    body: "Teban Gardens, a cluster of HDB blocks, a condo — whatever your kampung is. We match locally first, starting with neighbours who already live near you.",
  },
  {
    number: "02",
    title: "Get matched with neighbours",
    body: "We pair you with neighbours who already make this trip every day — no one's going out of their way for you.",
  },
  {
    number: "03",
    title: "Ride together, split the cost",
    body: "Chip in for fuel and parking directly with your driver. No surge pricing, no platform markup — just a fair split between neighbours.",
  },
  {
    number: "04",
    title: "Do it again tomorrow",
    body: "Keep a regular match for a standing carpool, or find someone new whenever your schedule changes.",
  },
];

export default function HowItWorks() {
  return (
    <Container as="section" id="how" pt="leading3" pb="leading2_5">
      <Eyebrow>How it works</Eyebrow>

      {STEPS.map((step, i) => (
        <Box
          key={step.number}
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "minmax(64px, 160px) minmax(0, 420px) minmax(0, 1fr)",
          }}
          rowGap="leading"
          columnGap="gutterSm"
          alignItems="baseline"
          py="leading1_5"
          borderTopWidth={i === 0 ? "0" : "2px"}
          borderTopColor="border"
        >
          <Text position="relative" textStyle="stepNumber" m="0">
            <Box
              as="span"
              position="absolute"
              left="-24px"
              top="6px"
              w="10px"
              h="10px"
              bg="accent.solid"
              display={{ base: "none", lg: "inline-block" }}
            />
            {step.number}
          </Text>
          <Heading as="h2" textStyle="sectionTitle" m="0">
            {step.title}
          </Heading>
          <Text textStyle="body" m="0" color="fg.subtle" maxW="52ch">
            {step.body}
          </Text>
        </Box>
      ))}
    </Container>
  );
}
