import { isValidMotionProp, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Articles from "@/components/articles";
import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import NoteWorthyProjects from "@/components/note-worthy-projects";
import { pxToRem } from "@/lib/chakra-ui";
import { Badge, Box, Center, chakra, Divider, Heading, HStack, Icon, LinkBox, Text, VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <NoteWorthyProjects />
      <Articles />
    </Box>
  );
}
