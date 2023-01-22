import Image from "next/image";

import { pxToRem } from "@/lib/chakra-ui";
import { Box, Button, Divider, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { renderSkills } from "./experience";

var articles = [
  {
    coverImgURL: "/closures.png",
    readTime: 3,
    tags: ["Closure", "Scope"],
    src: "https://medium.com/@akashsdas_dev/javascript-closures-the-interview-cracker-bf06690ef739",
  },
  {
    coverImgURL: "/compile-time.png",
    readTime: 5,
    tags: ["Execution Context", "Strict Mode"],
    src: "https://medium.com/@akashsdas_dev/javascript-compile-time-99f2984c69b7",
  },
  {
    coverImgURL: "/function.png",
    readTime: 4,
    tags: ["Functions"],
    src: "https://medium.com/@akashsdas_dev/functions-in-javascript-fa1423ff6c4c",
  },
  {
    coverImgURL: "/default-binding.png",
    readTime: 2,
    tags: ["This Keyword"],
    src: "https://medium.com/@akashsdas_dev/default-binding-in-javascript-aa6f7563398b",
  },
];

export default function Articles() {
  return (
    <VStack gap={pxToRem(32)} w="full" my={pxToRem(128)}>
      <Heading h={pxToRem(44)}>Other Noteworthy Projects</Heading>
      <Divider w="100%" maxW={pxToRem(800)} borderStyle="dashed" />

      <SimpleGrid
        w={["full", pxToRem(1024)]}
        minChildWidth={["full", pxToRem(420)]}
        column={[1, 3]}
        gap={pxToRem(64)}
        justifyItems="center"
        justifyContent="center"
        alignItems="center"
      >
        {articles.map((article) => (
          <ArticleCard key={article.coverImgURL} article={article} />
        ))}
      </SimpleGrid>

      <a
        href="https://medium.com/@akashsdas_dev"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="outline">See More</Button>
      </a>
    </VStack>
  );

  function ArticleCard({ article }: { article: typeof articles[0] }) {
    return (
      <a target="_blank" href={article.src} rel="noreferrer">
        <VStack
          w={pxToRem(420)}
          maxW={pxToRem(420)}
          gap={pxToRem(8)}
          role="group"
        >
          <Box
            position="relative"
            w={pxToRem(420)}
            h={pxToRem(220.5)}
            transition="all 0.3s ease-in-out"
            _groupHover={{ transform: "scale(0.98)" }}
          >
            <Image
              src={article.coverImgURL}
              alt="Cover Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <HStack justifyContent="space-between" alignItems="center" w="full">
            <HStack gap={pxToRem(8)}>{article.tags.map(renderSkills)}</HStack>
            <Text opacity={0.6}>{article.readTime} min read</Text>
          </HStack>
        </VStack>
      </a>
    );
  }
}
