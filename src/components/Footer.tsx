import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container as="footer" py="leading2">
      <Text textStyle="footnote" color="fg.subtle">
        Kampung Ride — carpool with your neighbours, by estate.
      </Text>
    </Container>
  );
}
