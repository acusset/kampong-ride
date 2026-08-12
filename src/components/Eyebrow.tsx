import type { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Text
      as="span"
      display="block"
      textStyle="kicker"
      color="accent.fg"
      mb="half"
    >
      {children}
    </Text>
  );
}
