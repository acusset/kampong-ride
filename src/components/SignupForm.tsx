"use client";

import { signupAction, type SignupState } from "@/app/_actions/signup";
import { useCopy } from "@/hooks/useCopy";
import { chakra, Field, Input, Text, VisuallyHidden } from "@chakra-ui/react";
import { useActionState } from "react";
import { SubmitButton } from "./SubmitButton";

const initialState: SignupState = { status: "idle" };

export default function SignupForm() {
  const copy = useCopy();
  const [state, formAction] = useActionState(signupAction, initialState);

  if (state.status === "success") {
    return (
      <Text
        role="status"
        aria-live="polite"
        textStyle="calloutTitle"
        mt="leading1_5"
      >
        {state.message}
      </Text>
    );
  }

  return (
    <chakra.form
      action={formAction}
      display="flex"
      gap="3"
      flexWrap="wrap"
      alignItems="flex-start"
      mt="leading1_5"
    >
      <input type="hidden" name="role" value="rider" />
      <Field.Root
        required
        invalid={state.status === "error"}
        minW="0"
        flexBasis="260px"
        flex="1"
        maxW="360px"
      >
        <VisuallyHidden>
          <Field.Label htmlFor="start-email-input">
            {copy.signup.form.emailLabel}
          </Field.Label>
        </VisuallyHidden>
        <Input
          id="start-email-input"
          name="email"
          type="email"
          placeholder={copy.signup.form.emailPlaceholder}
          bg="bg.panel"
          borderColor="border"
          color="fg"
          borderRadius="0"
          minH="42px"
        />
        <Field.ErrorText color="fg">{state.message}</Field.ErrorText>
      </Field.Root>
      <SubmitButton />
    </chakra.form>
  );
}
