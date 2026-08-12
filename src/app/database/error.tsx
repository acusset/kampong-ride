"use client";

import { Box, Button, Code, Heading, Text } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        DB
      </Heading>
      <Text>There was an error connecting to the database.</Text>
      <Text>Check your DATABASE_URL in .env.local (see .env.example).</Text>
      <Code display="block" whiteSpace="pre-wrap" my={4} p={3}>
        {error.message}
      </Code>
      <Button onClick={reset}>Try again</Button>
    </Box>
  );
}
