import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Eyebrow from "./Eyebrow";

const TAGS = ["You choose your riders", "Fuel costs split fairly", "Pause anytime"];

export default function AlreadyDriving() {
  return (
    <Container
      as="section"
      id="drive"
      display="grid"
      gridTemplateColumns={{ base: "1fr", lg: "minmax(0, 5fr) minmax(0, 7fr)" }}
      rowGap="leading"
      columnGap="gutterLg"
      alignItems="center"
      py="leading2_5"
    >
      <Box>
        <Eyebrow>Already driving?</Eyebrow>
        <Heading as="h2" textStyle="subsectionTitle" m="0">
          Turn your empty seats into savings
        </Heading>
        <Text textStyle="body" color="fg.subtle" mt="half" maxW="48ch">
          It&rsquo;s a trip you&rsquo;re already making. Offer a seat to up to three neighbours —
          you set the days, the seats and the pickup points, riders chip in for fuel, and you
          start the day with company instead of an empty car.
        </Text>
        <Box display="flex" gap="2" flexWrap="wrap" mt="leading">
          {TAGS.map((tag) => (
            <Box
              key={tag}
              as="span"
              display="inline-flex"
              alignItems="center"
              fontSize="11px"
              letterSpacing="0.02em"
              px="2.5"
              py="3px"
              bg="accent.subtle"
              color="accent.800"
            >
              {tag}
            </Box>
          ))}
        </Box>
        <Box mt="leading">
          <Button asChild colorPalette="accent" variant="solid">
            <a href="#start">Offer a seat</a>
          </Button>
        </Box>
      </Box>
      <Box
        aspectRatio={951 / 665}
        w="100%"
        bg="bg.panel"
        filter="grayscale(1) contrast(1.08)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        textAlign="center"
      >
        <Text fontSize="13px" color="fg.faint">
          Photo placeholder — driver and neighbours carpooling in the morning
        </Text>
      </Box>
    </Container>
  );
}
