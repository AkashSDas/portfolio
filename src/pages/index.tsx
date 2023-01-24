import Head from "next/head";

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
      <Head>
        <title>AkashSDas</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </Head>

      <Hero />
      <Experience />
      <FeaturedProjects />
      <NoteWorthyProjects />
      <Articles />
      <ContactMe />
    </Box>
  );
}
