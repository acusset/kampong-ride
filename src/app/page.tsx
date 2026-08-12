import AlreadyDriving from "@/components/AlreadyDriving";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SignupSection from "@/components/SignupSection";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column">
      <Hero />
      <HowItWorks />
      <AlreadyDriving />
      <Faq />
      <SignupSection />
    </Flex>
  );
}
