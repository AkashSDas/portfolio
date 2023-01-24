import Image from "next/image";
import { useContext } from "react";

import { pxToRem } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { Box, Button, Divider, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

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
  var articleRef = useContext(ScrollContext).articlesRef;

  return (
    <Box
      as="section"
      ref={articleRef}
      gap={pxToRem(32)}
      w="100vw"
      overflowX={{ base: "scroll", md: "hidden" }}
      py={{ base: pxToRem(48), md: pxToRem(128) }}
    >
      <Heading
        h={pxToRem(44)}
        w="full"
        textAlign="center"
        mb={{ base: pxToRem(8), md: pxToRem(32) }}
      >
        Latest Articles
      </Heading>

      <Divider
        w="100%"
        maxW={pxToRem(800)}
        borderStyle="dashed"
        mx="auto"
        mb={{ base: pxToRem(8), md: pxToRem(32) }}
      />

      <HStack
        px={{ base: pxToRem(16), md: pxToRem(128) }}
        gap={pxToRem(56)}
        overflowX="scroll"
        mb={{ base: pxToRem(8), md: pxToRem(32) }}
      >
        {articles.map((article) => (
          <ArticleCard key={article.coverImgURL} article={article} />
        ))}
      </HStack>

      <Link
        href="https://medium.com/@akashsdas_dev"
        target="_blank"
        rel="noreferrer"
        display="flex"
        w="full"
        justifyContent="center"
        _hover={{ textDecoration: "none" }}
      >
        <Button mx="auto" variant="outline" px={pxToRem(48)} h={pxToRem(48)}>
          See More
        </Button>
      </Link>
    </Box>
  );

  function ArticleCard({ article }: { article: typeof articles[0] }) {
    return (
      <Link
        target="_blank"
        href={article.src}
        rel="noreferrer"
        w={{ base: "full", md: pxToRem(420) }}
      >
        <VStack gap={pxToRem(8)} role="group">
          <Box
            position="relative"
            w={{ base: "full", md: pxToRem(420) }}
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
      </Link>
    );
  }
}
