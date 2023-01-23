import Image from "next/image";
import { useContext, useRef } from "react";

import { pxToRem } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { Box, Divider, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";

import { renderSkills } from "./experience";

var projects = [
  {
    coverImgURL: "/camps-for-champs.png",
    title: "Camps for Champs",
    description:
      "Camps service provider’s web app. Admin can create, update & publish camps. Customers can browse & book camps. Payments are also handled.",
    skills: ["Next.js", "Nest.js", "MongoDB", "Stripe", "Testing"],
    codeLinks: {
      backend: "https://github.com/AkashSDas/camps-for-champs-backend",
      frontend: "https://github.com/AkashSDas/camps-for-champs-frontend",
    },
  },
  {
    coverImgURL: "/darklight.png",
    title: "DarkLight",
    description:
      "Online learning from courses web app web app. Instructors can create, update & publish courses. Students can browse & buy courses.",
    skills: ["Next.js", "Express.js", "MongoDB", "Stripe", "Testing"],
    codeLinks: {
      backend: "https://github.com/AkashSDas/darklight-backend",
      frontend: "https://github.com/AkashSDas/darklight-frontend",
    },
  },
  {
    coverImgURL: "/salt.png",
    title: "Salt",
    description:
      "Groceries app for your daily needs. Consumers can buy groceries, pay using credit-cards & they’ll have records of their order & payments. Also user can blog.",
    skills: ["Flutter", "Express.js", "MongoDB", "Stripe", "Firebase"],
    codeLinks: {
      src: "https://github.com/AkashSDas/salt",
    },
  },
];

export default function FeaturedProjects() {
  var featuredProjectsRef = useContext(ScrollContext).workRef;

  return (
    <Box ref={featuredProjectsRef} as="section" py={pxToRem(128)}>
      <Heading h={pxToRem(44)} w="full" textAlign="center" mb={pxToRem(32)}>
        Featured Projects
      </Heading>

      <Divider
        w="100%"
        maxW={pxToRem(800)}
        borderStyle="dashed"
        mx="auto"
        mb={pxToRem(32)}
      />

      <HStack px={pxToRem(128)} gap={pxToRem(56)} overflowX="auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </HStack>
    </Box>
  );

  function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
      <VStack
        w={pxToRem(500)}
        minW={pxToRem(420)}
        gap={pxToRem(16)}
        role="group"
      >
        <Box
          w="full"
          h={pxToRem(240)}
          position="relative"
          transition="all 0.3s ease-in-out"
          _groupHover={{ transform: "scale(0.98)" }}
        >
          <Image
            src={project.coverImgURL}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <VStack w="full" maxW={pxToRem(420)} gap={pxToRem(8)}>
          <Text fontFamily="heading" fontSize={pxToRem(20)}>
            {project.title}
          </Text>
          <Text lineHeight="140%" opacity={0.6}>
            {project.description}
          </Text>

          <HStack
            flexWrap="wrap"
            gap={pxToRem(8)}
            justifyContent="center"
            w="full"
          >
            {project.skills.map(renderSkills)}
          </HStack>

          <HStack gap={pxToRem(16)} textDecoration="underline">
            {project.codeLinks.backend && (
              <a
                target="_blank"
                href={project.codeLinks.backend}
                rel="noreferrer"
              >
                <HStack _hover={{ opacity: 0.7 }} _active={{ opacity: 0.4 }}>
                  <GitHubIcon /> <Text textDecoration="underline">Backend</Text>
                </HStack>
              </a>
            )}
            {project.codeLinks.frontend && (
              <a
                target="_blank"
                href={project.codeLinks.frontend}
                rel="noreferrer"
              >
                <HStack _hover={{ opacity: 0.7 }} _active={{ opacity: 0.4 }}>
                  <GitHubIcon />
                  <Text textDecoration="underline">Frontend</Text>
                </HStack>
              </a>
            )}
            {project.codeLinks.src && (
              <a target="_blank" href={project.codeLinks.src} rel="noreferrer">
                <HStack _hover={{ opacity: 0.7 }} _active={{ opacity: 0.4 }}>
                  <GitHubIcon />
                  <Text textDecoration="underline">Source Code</Text>
                </HStack>
              </a>
            )}
          </HStack>
        </VStack>
      </VStack>
    );
  }
}

export function GitHubIcon() {
  return (
    <Icon>
      <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_19_639)">
          <path
            d="M6.61367 13.9711C6.61367 14.0414 6.53281 14.0977 6.43086 14.0977C6.31484 14.1082 6.23398 14.052 6.23398 13.9711C6.23398 13.9008 6.31484 13.8445 6.4168 13.8445C6.52227 13.834 6.61367 13.8902 6.61367 13.9711ZM5.52031 13.8129C5.4957 13.8832 5.56602 13.9641 5.67148 13.9852C5.76289 14.0203 5.86836 13.9852 5.88945 13.9148C5.91055 13.8445 5.84375 13.7637 5.73828 13.732C5.64687 13.7074 5.54492 13.7426 5.52031 13.8129ZM7.07422 13.7531C6.97227 13.7777 6.90195 13.8445 6.9125 13.9254C6.92305 13.9957 7.01445 14.0414 7.11992 14.0168C7.22188 13.9922 7.29219 13.9254 7.28164 13.8551C7.27109 13.7883 7.17617 13.7426 7.07422 13.7531ZM9.3875 0.28125C4.51133 0.28125 0.78125 3.9832 0.78125 8.85938C0.78125 12.7582 3.23516 16.0945 6.74023 17.2688C7.19023 17.3496 7.34844 17.0719 7.34844 16.8434C7.34844 16.6254 7.33789 15.423 7.33789 14.6848C7.33789 14.6848 4.87695 15.2121 4.36016 13.6371C4.36016 13.6371 3.95937 12.6141 3.38281 12.3504C3.38281 12.3504 2.57773 11.7984 3.43906 11.809C3.43906 11.809 4.31445 11.8793 4.79609 12.716C5.56602 14.073 6.85625 13.6828 7.35898 13.4508C7.43984 12.8883 7.66836 12.498 7.92148 12.266C5.95625 12.048 3.97344 11.7633 3.97344 8.38125C3.97344 7.41445 4.24063 6.9293 4.80312 6.31055C4.71172 6.08203 4.41289 5.13984 4.89453 3.92344C5.6293 3.69492 7.32031 4.87266 7.32031 4.87266C8.02344 4.67578 8.7793 4.57383 9.52812 4.57383C10.277 4.57383 11.0328 4.67578 11.7359 4.87266C11.7359 4.87266 13.427 3.69141 14.1617 3.92344C14.6434 5.14336 14.3445 6.08203 14.2531 6.31055C14.8156 6.93281 15.1602 7.41797 15.1602 8.38125C15.1602 11.7738 13.0895 12.0445 11.1242 12.266C11.4477 12.5437 11.7219 13.0711 11.7219 13.8973C11.7219 15.082 11.7113 16.548 11.7113 16.8363C11.7113 17.0648 11.873 17.3426 12.3195 17.2617C15.8352 16.0945 18.2188 12.7582 18.2188 8.85938C18.2188 3.9832 14.2637 0.28125 9.3875 0.28125ZM4.19844 12.4066C4.15273 12.4418 4.16328 12.5227 4.22305 12.5895C4.2793 12.6457 4.36016 12.6703 4.40586 12.6246C4.45156 12.5895 4.44102 12.5086 4.38125 12.4418C4.325 12.3855 4.24414 12.3609 4.19844 12.4066ZM3.81875 12.1219C3.79414 12.1676 3.8293 12.2238 3.89961 12.259C3.95586 12.2941 4.02617 12.2836 4.05078 12.2344C4.07539 12.1887 4.04023 12.1324 3.96992 12.0973C3.89961 12.0762 3.84336 12.0867 3.81875 12.1219ZM4.95781 13.3734C4.90156 13.4191 4.92266 13.5246 5.00352 13.5914C5.08437 13.6723 5.18633 13.6828 5.23203 13.6266C5.27773 13.5809 5.25664 13.4754 5.18633 13.4086C5.10898 13.3277 5.00352 13.3172 4.95781 13.3734ZM4.55703 12.8566C4.50078 12.8918 4.50078 12.9832 4.55703 13.0641C4.61328 13.1449 4.7082 13.1801 4.75391 13.1449C4.81016 13.0992 4.81016 13.0078 4.75391 12.927C4.70469 12.8461 4.61328 12.8109 4.55703 12.8566Z"
            fill="#1C1F24"
            fillOpacity="0.6"
          />
        </g>
        <defs>
          <clipPath id="clip0_19_639">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
}
