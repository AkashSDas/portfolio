import { useContext, useRef } from "react";

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
      px={pxToRem(32)}
    >
      <Text fontFamily="heading">/Root</Text>

      <HStack gap={pxToRem(8)}>
        <Button
          variant="ghost"
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

        <Button variant="solid">Resume</Button>
      </HStack>
    </HStack>
  );
}
