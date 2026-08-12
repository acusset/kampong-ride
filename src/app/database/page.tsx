import { db } from "@/lib/db";
import { waitlistSignups } from "@/lib/db/schema";
import { Box, Heading, Table, Text } from "@chakra-ui/react";

export default async function Page() {
  const signups = await db.select().from(waitlistSignups);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        DB
      </Heading>
      {signups.length === 0 ? (
        <Text>No signups found.</Text>
      ) : (
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Role</Table.ColumnHeader>
              <Table.ColumnHeader>Created At</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {signups.map((signup) => (
              <Table.Row key={signup.id}>
                <Table.Cell>{signup.email}</Table.Cell>
                <Table.Cell>{signup.role}</Table.Cell>
                <Table.Cell>{signup.createdAt.toISOString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
}
