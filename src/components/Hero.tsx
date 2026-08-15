import { copy } from "@/lib/copy";
import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container as="section" pt="leading4" pb="leading3">
      <Heading as="h1" textStyle="heroTitle" m="0 0 0 -0.058em">
        <Text as="span" display="block">
          {copy.hero.titleLine1}
        </Text>
        <Text as="span" display="block" color="accent.solid">
          {copy.hero.titleLine2}
        </Text>
      </Heading>
      <Text textStyle="bodyLg" maxW="58ch" mt="leading1_5" color="fg.subtle">
        {copy.hero.body}
      </Text>
      <Flex gap="3" wrap="wrap" mt="leading">
        <Button asChild colorPalette="accent" variant="solid">
          <a href="#start">{copy.hero.ctaPrimary}</a>
        </Button>
        <Button asChild colorPalette="accent" variant="ghost">
          <a href="#how">{copy.hero.ctaSecondary}</a>
        </Button>
      </Flex>
    </Container>
  );
}
