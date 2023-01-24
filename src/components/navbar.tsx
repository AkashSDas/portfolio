import { isValidMotionProp, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import { pxToRem } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { Button, chakra, HStack, Link, shouldForwardProp, Text } from "@chakra-ui/react";

var NavbarWrapper = chakra(motion.nav, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Navbar() {
  var { experienceRef, workRef, articlesRef, contactRef } =
    useContext(ScrollContext);

  var [prevScrollPos, setPrevScrollPos] = useState(0);
  var [visible, setVisible] = useState(true);

  function handleScroll() {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) setVisible(false);
    else setVisible(true);
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(function watchAtScroll() {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <NavbarWrapper
      display="flex"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      gap={pxToRem(8)}
      h={pxToRem(56)}
      px={{ base: pxToRem(16), md: pxToRem(32) }}
      as="nav"
      bg="rgba(255, 255, 255, 0.5)"
      position="fixed"
      zIndex={10}
      top={visible ? 0 : pxToRem(-44)}
      transition="top 0.3s ease-in-out"
      backdropFilter="blur(16px)"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.1)"
    >
      <Text fontFamily="heading">/Root</Text>

      <HStack gap={pxToRem(8)}>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (experienceRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Experience
        </Button>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (workRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Work
        </Button>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (articlesRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Aritcles
        </Button>
        <Button
          variant="ghost"
          display={{ base: "none", md: "block" }}
          onClick={() =>
            (contactRef.current as any).scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Contact
        </Button>

        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          _hover={{ textDecor: "none" }}
        >
          <Button variant="solid">Resume</Button>
        </Link>
      </HStack>
    </NavbarWrapper>
  );
}
