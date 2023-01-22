import { pxToRem } from "@/lib/chakra-ui";
import { Button, Center, HStack, Text, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Center h="container.md" as="section">
      <VStack gap={pxToRem(16)} alignItems="start">
        <Text>👋 Hi, my name is</Text>

        <VStack gap={0} alignItems="start">
          <Text
            fontFamily="heading"
            fontSize={pxToRem(60)}
            lineHeight={pxToRem(72)}
          >
            Akash Das
          </Text>

          <HStack flexWrap="wrap" gap={pxToRem(8)} mt={`0 !important`}>
            <Text
              fontFamily="heading"
              fontSize={pxToRem(60)}
              color="b.primary"
              lineHeight={pxToRem(72)}
            >
              I Craft
            </Text>
            <Text
              fontFamily="heading"
              fontSize={pxToRem(60)}
              lineHeight={pxToRem(72)}
            >
              Digital Solutions
            </Text>
          </HStack>
        </VStack>

        <Text maxW={pxToRem(500)} opacity={0.6} lineHeight="140%">
          I’m a software engineer specialising in building (& often designing)
          digital products which would provide high utility value to the
          clients. Currently I’m focusing on building web products.
        </Text>

        <Button variant="solid" h={pxToRem(56)} px={pxToRem(36)}>
          Check Projects
        </Button>
      </VStack>
    </Center>
  );
}
