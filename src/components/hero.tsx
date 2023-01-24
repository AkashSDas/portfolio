import { useContext } from "react";

import { pxToRem } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function Hero() {
  var workRef = useContext(ScrollContext).workRef;

  return (
    <Center
      py={{ base: pxToRem(48), md: pxToRem(128) }}
      px={pxToRem(16)}
      as="section"
    >
      <VStack gap={pxToRem(16)} alignItems="start">
        <Text>👋 Hi, my name is</Text>

        <VStack gap={0} alignItems="start">
          <Heading
            fontSize={{ base: pxToRem(50), sm: pxToRem(60) }}
            lineHeight={"100%"}
          >
            Akash Das
          </Heading>

          <Box gap={pxToRem(8)} mt={`0 !important`}>
            <Heading
              fontSize={{ base: pxToRem(50), sm: pxToRem(60) }}
              color="b.primary"
              lineHeight={"100%"}
              display="inline-block"
              mr={pxToRem(8)}
            >
              I Craft
            </Heading>
            <Heading
              lineHeight={"100%"}
              fontSize={{ base: pxToRem(50), sm: pxToRem(60) }}
              display="inline-block"
            >
              Digital Solutions
            </Heading>
          </Box>
        </VStack>

        <Text maxW={pxToRem(500)} opacity={0.6} lineHeight="140%">
          I’m a software engineer specialising in building (& often designing)
          digital products which would provide high utility value to the
          clients. Currently I’m focusing on building web products.
        </Text>

        <Button
          variant="solid"
          h={{ base: pxToRem(48), sm: pxToRem(56) }}
          px={pxToRem(36)}
          onClick={() =>
            (workRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Check Projects
        </Button>
      </VStack>
    </Center>
  );
}
