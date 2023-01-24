import { pxToRem } from "@/lib/chakra-ui";
import { Box, Divider, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { renderSkills } from "./experience";
import { GitHubIcon } from "./featured-projects";

var projects = [
  {
    title: "Drop",
    description:
      "Mini-blogging app like Twitter. Users can tweet & re-tweet. Tweets can also be reacted on.",
    skills: ["Next.js", "Redux-Toolkit", "Express.js", "MongoDB"],
    src: "https://github.com/AkashSDas/drop",
  },
  {
    title: "Owl",
    description:
      "Online course creator & place where users can learn from courses.",
    skills: ["Next.js", "Firebase", "Express.js", "MongoDB"],
    src: "https://github.com/AkashSDas/owl",
  },
  {
    title: "Open Community",
    description:
      "Web app is inspired by Medium.com. Authors can post articles. There’re 3 subscription plans available for the users.",
    skills: ["Next.js", "Express.js", "MongoDB", "Stripe"],
    src: "https://github.com/AkashSDas/open-community",
  },
  {
    title: "Online Lecture Summarizer",
    description:
      "CLI to record online lecture and then create a summary of that which user can read or listen to.",
    skills: ["Python", "TensorFlow2", "Pandas", "Spacy"],
    src: "https://github.com/AkashSDas/online-lecture-summarizer",
  },
];

export default function NoteWorthyProjects() {
  return (
    <VStack
      gap={pxToRem(32)}
      w="full"
      as="section"
      py={{ base: pxToRem(48), md: pxToRem(128) }}
      px={pxToRem(16)}
    >
      <Heading h={pxToRem(44)} textAlign="center">
        Other Noteworthy Projects
      </Heading>
      <Divider w="100%" maxW={pxToRem(800)} borderStyle="dashed" />

      <SimpleGrid
        w={{ base: "full", lg: pxToRem(1024) }}
        minChildWidth={{ base: "full", lg: pxToRem(480) }}
        column={{ base: 1, lg: 2 }}
        gap={{ base: pxToRem(16), lg: pxToRem(32) }}
        justifyItems="center"
        justifyContent="center"
        alignItems="center"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </SimpleGrid>
    </VStack>
  );

  function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
      <VStack
        w={{ base: "full", md: pxToRem(480) }}
        maxW={pxToRem(480)}
        borderRadius={pxToRem(16)}
        border="1px solid"
        borderColor="b.border"
        px={pxToRem(32)}
        py={pxToRem(24)}
        gap={pxToRem(16)}
      >
        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Heading fontSize={pxToRem(20)}>{project.title}</Heading>
          <a target="_blank" href={project.src} rel="noreferrer">
            <Box _hover={{ opacity: 0.7 }} _active={{ opacity: 0.4 }}>
              <GitHubIcon />
            </Box>
          </a>
        </HStack>

        <Text opacity={0.6}>{project.description}</Text>

        <HStack
          flexWrap="wrap"
          gap={pxToRem(8)}
          justifyContent="center"
          w="full"
        >
          {project.skills.map(renderSkills)}
        </HStack>
      </VStack>
    );
  }
}
