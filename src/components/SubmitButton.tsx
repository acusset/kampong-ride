"use client";

import { useCopy } from "@/hooks/useCopy";
import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const copy = useCopy();
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      loading={pending}
      loadingText={copy.signup.form.submitPending}
      variant="outline"
      color="bg"
      borderColor="bg"
      _hover={{ bg: "bg/12" }}
      _active={{ bg: "bg/20" }}
    >
      {copy.signup.form.submit}
    </Button>
  );
};
