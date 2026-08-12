"use client";

import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      loading={pending}
      loadingText="Adding you…"
      variant="outline"
      color="bg"
      borderColor="bg"
      _hover={{ bg: "bg/12" }}
      _active={{ bg: "bg/20" }}
    >
      Join waitlist
    </Button>
  );
};
