import { copy } from "@/lib/copy";
import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container as="footer" py="leading2">
      <Text textStyle="footnote" color="fg.subtle">
        {copy.footer.tagline}
      </Text>
    </Container>
  );
}
