import { isValidMotionProp, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import { pxToRem } from "@/lib/chakra-ui";
import { Badge, Box, Center, chakra, Divider, Heading, HStack, Icon, LinkBox, Text, VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <Experience />
      <FeaturedProjects />
    </Box>
  );
}
