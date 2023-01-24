import { useContext } from "react";

import { pxToRem } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { Button, HStack, Text } from "@chakra-ui/react";

export default function Navbar() {
  var { experienceRef, workRef, articlesRef, contactRef } =
    useContext(ScrollContext);

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      gap={pxToRem(8)}
      h={pxToRem(56)}
      px={{ base: pxToRem(16), md: pxToRem(32) }}
      as="nav"
    >
      <Text fontFamily="heading">/Root</Text>

      <HStack gap={pxToRem(8)}>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (experienceRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Experience
        </Button>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (workRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Work
        </Button>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (articlesRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Aritcles
        </Button>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (contactRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Contact
        </Button>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <Button variant="solid">Resume</Button>
        </a>
      </HStack>
    </HStack>
  );
}
