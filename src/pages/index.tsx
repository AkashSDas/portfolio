import Image from "next/image";

import Hero from "@/components/hero";
import { pxToRem } from "@/lib/chakra-ui";
import { Badge, Box, Center, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Experience />
    </Box>
  );
}

function Experience() {
  return (
    <Center h="container.md" as="section">
      <VStack gap={pxToRem(56)} w="full">
        <Heading h={pxToRem(44)}>Experience</Heading>
        <Divider w="100%" maxW={pxToRem(800)} borderStyle="dashed" />

        <HStack justifyContent="center" alignItems="center" gap={pxToRem(56)}>
          <CompanyInfo />
          <Responsibilities />
        </HStack>
      </VStack>
    </Center>
  );

  function Responsibilities() {
    function renderSkills(skill: string) {
      return (
        <Badge key={skill} bg="b.border" color="rgba(28, 31, 36, 0.6)">
          {skill}
        </Badge>
      );
    }

    return (
      <VStack w="full" maxW={pxToRem(540)} gap={pxToRem(16)}>
        <Text fontSize={pxToRem(18)} fontWeight="medium">
          JavaScript / NextJS / Redux / TypeScript Developer
        </Text>

        <Text opacity={0.6} lineHeight="140%">
          I was responsible for creating full-stack projects from scratch & put
          them into production. Also, I’ve projects where I had to refactor the
          existing codebase, put things to production & complete work on tight
          deadlines.
        </Text>

        <HStack
          flexWrap="wrap"
          gap={pxToRem(8)}
          justifyContent="center"
          w="full"
          maxW={pxToRem(420)}
        >
          {[
            "React.js",
            "Next.js",
            "Redux",
            "Express.js",
            "Nest.js",
            "MongoDB",
            "TypeScript",
            "Firebase",
            "Jest",
            "Python",
          ].map(renderSkills)}
        </HStack>
      </VStack>
    );
  }

  function CompanyInfo() {
    return (
      <VStack>
        {/* Company */}
        <HStack>
          <Text fontFamily="heading" fontSize={pxToRem(20)}>
            Freelance
          </Text>

          <Box position="relative" w={pxToRem(72)} h={pxToRem(36)}>
            <Image
              src="/upwork-logo.svg"
              alt="Upwork"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </HStack>

        {/* Duration */}
        <Text fontSize="sm" opacity={0.6}>
          (2020 - 2022)
        </Text>
      </VStack>
    );
  }
}
