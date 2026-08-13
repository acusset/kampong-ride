import { copy } from "@/lib/copy";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import SignupForm from "./SignupForm";

export default function SignupSection() {
  return (
    <Box as="section" id="start" bg="accent.solid" color="bg">
      <Container py="leading3">
        <Heading as="h3" textStyle="closeTitle" m="0 0 0 -0.058em" color="bg">
          <Box as="span" display="block">
            {copy.signup.titleLine1}
          </Box>
        </Heading>
        <Text textStyle="body" maxW="48ch" mt="half" color="bg/85">
          {copy.signup.body}
        </Text>
        <SignupForm />
      </Container>
    </Box>
  );
}
