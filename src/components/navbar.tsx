import { pxToRem } from "@/lib/chakra-ui";
import { Button, HStack, Text } from "@chakra-ui/react";

export default function Navbar() {
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
        <Button variant="ghost">Experience</Button>
        <Button variant="ghost">Work</Button>
        <Button variant="ghost">Aritcles</Button>
        <Button variant="ghost">Contact</Button>

        <Button variant="solid">Resume</Button>
      </HStack>
    </HStack>
  );
}
