import { copy } from "@/lib/copy";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import carpool from "@/assets/carpool.jpeg";
import Eyebrow from "./Eyebrow";

export default function AlreadyDriving() {
  return (
    <Container
      as="section"
      id="drive"
      display="grid"
      gridTemplateColumns={{ base: "1fr", lg: "minmax(0, 5fr) minmax(0, 7fr)" }}
      rowGap="leading"
      columnGap="gutterLg"
      alignItems="center"
      py="leading2_5"
    >
      <Box>
        <Eyebrow>{copy.alreadyDriving.eyebrow}</Eyebrow>
        <Heading as="h2" textStyle="subsectionTitle" m="0">
          {copy.alreadyDriving.title}
        </Heading>
        <Text textStyle="body" color="fg.subtle" mt="half" maxW="48ch">
          {copy.alreadyDriving.body}
        </Text>
        <Box mt="leading">
          <Button asChild colorPalette="accent" variant="solid">
            <a href="#start">{copy.alreadyDriving.cta}</a>
          </Button>
        </Box>
      </Box>
      <Box
        position="relative"
        aspectRatio={951 / 665}
        w="100%"
        bg="bg.panel"
        filter="grayscale(1) contrast(1.08)"
      >
        <Image
          src={carpool}
          alt={copy.alreadyDriving.photoAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 992px) 58vw, 100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Container>
  );
}
