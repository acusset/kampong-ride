"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { system } from "./kampong-ride-theme"

export default function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}