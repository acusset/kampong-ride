import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

export default function Nav() {
  return (
    <Container
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="leading"
      py="5"
      borderBottomWidth="2px"
      borderBottomColor="border"
    >
      <Text textStyle="wordmark">Kampung Ride</Text>
      <Flex alignItems="center" gap="leading" flexWrap="wrap">
        <Link
          href="#how"
          fontSize="14px"
          color="fg"
          _hover={{ color: "accent.fg", textDecoration: "none" }}
        >
          How it works
        </Link>
        <Link
          href="#drive"
          fontSize="14px"
          color="fg"
          _hover={{ color: "accent.fg", textDecoration: "none" }}
        >
          Already driving?
        </Link>
        <Link
          href="#faq"
          fontSize="14px"
          color="fg"
          _hover={{ color: "accent.fg", textDecoration: "none" }}
        >
          FAQ
        </Link>
        <Button asChild colorPalette="accent" variant="solid" size="sm">
          <a href="#start">
            Join waitlist
            <ArrowRight size={16} />
          </a>
        </Button>
      </Flex>
    </Container>
  );
}
