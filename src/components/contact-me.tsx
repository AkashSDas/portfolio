import { useContext } from "react";

import { pxToRem } from "@/lib/chakra-ui";
import { ScrollContext } from "@/lib/context";
import { Badge, Center, Divider, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";

export default function ContactMe() {
  var contactMeRef = useContext(ScrollContext).contactRef;

  return (
    <VStack ref={contactMeRef} gap={pxToRem(32)} w="full" py={pxToRem(128)}>
      <Heading h={pxToRem(44)}>Contact Me</Heading>
      <Divider w="100%" maxW={pxToRem(800)} borderStyle="dashed" />

      <Center>
        <Badge
          bg="b.border"
          color="rgba(28, 31, 36, 0.6)"
          h={pxToRem(44)}
          px={pxToRem(24)}
          fontSize={pxToRem(16)}
          mr={pxToRem(16)}
        >
          <HStack>
            <Icon>
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.659 6.70781C17.7961 6.59883 18 6.70078 18 6.87305V14.0625C18 14.9941 17.2441 15.75 16.3125 15.75H1.6875C0.755859 15.75 0 14.9941 0 14.0625V6.87656C0 6.70078 0.200391 6.60234 0.341016 6.71133C1.12852 7.32305 2.17266 8.1 5.75859 10.7051C6.50039 11.2465 7.75195 12.3855 9 12.3785C10.2551 12.3891 11.5312 11.2254 12.2449 10.7051C15.8309 8.1 16.8715 7.31953 17.659 6.70781ZM9 11.25C9.81563 11.2641 10.9898 10.2234 11.5805 9.79453C16.2457 6.40898 16.6008 6.11367 17.6766 5.26992C17.8805 5.11172 18 4.86563 18 4.60547V3.9375C18 3.00586 17.2441 2.25 16.3125 2.25H1.6875C0.755859 2.25 0 3.00586 0 3.9375V4.60547C0 4.86563 0.119531 5.1082 0.323437 5.26992C1.39922 6.11016 1.7543 6.40898 6.41953 9.79453C7.01016 10.2234 8.18437 11.2641 9 11.25Z"
                  fill="#1C1F24"
                  fillOpacity="0.6"
                />
              </svg>
            </Icon>

            <Text>akashsdas.dev@gmail.com</Text>
          </HStack>
        </Badge>

        <a
          href="https://www.linkedin.com/in/akashsdas-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <Badge
            bg="b.border"
            color="rgba(28, 31, 36, 0.6)"
            h={pxToRem(44)}
            px={pxToRem(24)}
            fontSize={pxToRem(16)}
            cursor="pointer"
          >
            <HStack>
              <Icon>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 1.25H2.49609C1.80859 1.25 1.25 1.81641 1.25 2.51172V17.4883C1.25 18.1836 1.80859 18.75 2.49609 18.75H17.5C18.1875 18.75 18.75 18.1836 18.75 17.4883V2.51172C18.75 1.81641 18.1875 1.25 17.5 1.25ZM6.53906 16.25H3.94531V7.89844H6.54297V16.25H6.53906ZM5.24219 6.75781C4.41016 6.75781 3.73828 6.08203 3.73828 5.25391C3.73828 4.42578 4.41016 3.75 5.24219 3.75C6.07031 3.75 6.74609 4.42578 6.74609 5.25391C6.74609 6.08594 6.07422 6.75781 5.24219 6.75781ZM16.2617 16.25H13.668V12.1875C13.668 11.2188 13.6484 9.97266 12.3203 9.97266C10.9688 9.97266 10.7617 11.0273 10.7617 12.1172V16.25H8.16797V7.89844H10.6562V9.03906H10.6914C11.0391 8.38281 11.8867 7.69141 13.1484 7.69141C15.7734 7.69141 16.2617 9.42188 16.2617 11.6719V16.25Z"
                    fill="#1C1F24"
                    fillOpacity="0.6"
                  />
                </svg>
              </Icon>

              <Text>LinkedIn</Text>
            </HStack>
          </Badge>
        </a>
      </Center>
    </VStack>
  );
}
