import Articles from "@/components/articles";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import NoteWorthyProjects from "@/components/note-worthy-projects";
import { pxToRem } from "@/lib/chakra-ui";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box mt={pxToRem(56)}>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <NoteWorthyProjects />
      <Articles />
      <ContactMe />
    </Box>
  );
}
