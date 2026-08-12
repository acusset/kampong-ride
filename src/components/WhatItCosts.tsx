import { copy } from "@/lib/copy";
import { Box, Container, Text } from "@chakra-ui/react";
import Eyebrow from "./Eyebrow";

export default function WhatItCosts() {
  return (
    <Container as="section" py="leading2_5">
      <Eyebrow>{copy.whatItCosts.eyebrow}</Eyebrow>
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
            {copy.whatItCosts.rideHailing.amount}
          </Text>
          <Text textStyle="kicker" color="fg.subtle" mt="half">
            {copy.whatItCosts.rideHailing.label}
          </Text>
        </Box>
        <Box>
          <Text textStyle="statNumber" m="0" color="accent.solid">
            {copy.whatItCosts.kampungRide.amount}
          </Text>
          <Text textStyle="kicker" color="fg.subtle" mt="half">
            {copy.whatItCosts.kampungRide.label}
          </Text>
        </Box>
      </Box>
      <Text textStyle="caption" color="fg.faint" mt="leading">
        {copy.whatItCosts.caption}
      </Text>
    </Container>
  );
}
