import { Box, Container, Heading, Text } from "@chakra-ui/react";
import SignupForm from "./SignupForm";

export default function SignupSection() {
  return (
    <Box as="section" id="start" bg="accent.solid" color="bg">
      <Container py="leading3">
        <Heading as="h3" textStyle="closeTitle" m="0 0 0 -0.058em" color="bg">
          <Box as="span" display="block">
            Your kampung is closer
          </Box>
          <Box as="span" display="block">
            than you think.
          </Box>
        </Heading>
        <Text textStyle="body" maxW="48ch" mt="half" color="bg/85">
          Started by neighbours tired of surge pricing — not a big rideshare company.
        </Text>
        <SignupForm />
      </Container>
    </Box>
  );
}
