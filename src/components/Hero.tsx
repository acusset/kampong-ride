import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container as="section" pt="leading4" pb="leading3">
      <Heading as="h1" textStyle="heroTitle" m="0 0 0 -0.058em">
        <Box as="span" display="block">
          Skip the surge.
        </Box>
        <Box as="span" display="block">
          Ride with your neighbours.
        </Box>
      </Heading>
      <Text textStyle="bodyLg" maxW="58ch" mt="leading1_5" color="fg.subtle">
        Kampung Ride matches you with neighbours from your own estate — your block, your
        condo, your kampung — who are already driving to work every morning. Tag along,
        chip in for the ride, skip the surge pricing.
      </Text>
      <Box display="flex" gap="3" flexWrap="wrap" mt="leading">
        <Button asChild colorPalette="accent" variant="solid">
          <a href="#start">Join waitlist</a>
        </Button>
        <Button asChild colorPalette="accent" variant="ghost">
          <a href="#how">See how it works</a>
        </Button>
      </Box>
    </Container>
  );
}
