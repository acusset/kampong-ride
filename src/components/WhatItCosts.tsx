import { Box, Container, Text } from "@chakra-ui/react";
import Eyebrow from "./Eyebrow";

export default function WhatItCosts() {
  return (
    <Container as="section" py="leading2_5">
      <Eyebrow>What it costs</Eyebrow>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
        rowGap="leading"
        columnGap="gutterLg"
        alignItems="end"
        maxW="800px"
      >
        <Box>
          <Text textStyle="statNumber" m="0" color="fg">
            ~$18
          </Text>
          <Text textStyle="kicker" color="fg.subtle" mt="half">
            Ride-hailing, surge hour, one rider
          </Text>
        </Box>
        <Box>
          <Text textStyle="statNumber" m="0" color="accent.solid">
            $5–7
          </Text>
          <Text textStyle="kicker" color="fg.subtle" mt="half">
            Kampung Ride, same trip, split with the driver
          </Text>
        </Box>
      </Box>
      <Text textStyle="caption" color="fg.faint" mt="leading">
        Illustrative example for a typical estate-to-town commute. Actual cost depends on distance
        and how many neighbours share the ride.
      </Text>
    </Container>
  );
}
