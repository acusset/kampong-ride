import { copy } from "@/lib/copy";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Eyebrow from "./Eyebrow";

export default function HowItWorks() {
  return (
    <Container as="section" id="how" pt="leading3" pb="leading2_5">
      <Eyebrow>{copy.howItWorks.eyebrow}</Eyebrow>

      {copy.howItWorks.steps.map((step, i) => (
        <Grid
          key={step.number}
          templateColumns={{
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
        </Grid>
      ))}
    </Container>
  );
}
