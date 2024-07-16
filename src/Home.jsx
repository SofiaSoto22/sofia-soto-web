import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Box
      fontFamily={"Cutive Mono"}
      backgroundColor={"black"}
      width={"100vw"}
      height={"100vh"}
      padding={"30px"}
    >
      <Grid
        position={"relative"}
        templateColumns="repeat(2, 1fr)"
        gap={10}
        height={"100%"}
        padding={"50px"}
        border={"1px"}
        borderColor={"white"}
      >
        <GridItem id="left">
          <Navbar />
        </GridItem>

        <GridItem position={"relative"}>
          <HStack spacing={"15px"} justifyContent={"end"} zIndex={2}>
            <Tooltip
              label="Take a glance"
              backgroundColor={"white"}
              color={"black"}
              fontFamily={"Cutive Mono"}
            >
              <Link href="https://github.com/SofiaSoto22" isExternal>
                <FaGithub className="hoverimg" size={"25px"} color="white" />
              </Link>
            </Tooltip>
            <Tooltip
              label="Let's connect"
              backgroundColor={"white"}
              color={"black"}
              fontFamily={"Cutive Mono"}
            >
              <Link
                href="https://www.linkedin.com/in/sof%C3%ADa-soto-hern%C3%A1ndez-26884117b/"
                isExternal
              >
                <FaLinkedin className="hoverimg" size={"25px"} color="white" />
              </Link>
            </Tooltip>
            <Tooltip
              label="Drop me an email"
              placement="bottom-start"
              backgroundColor={"white"}
              color={"black"}
              fontFamily={"Cutive Mono"}
            >
              <Link href="mailto:sofiasoto3b@gmail.com" target="_top">
                <SiGmail className="hoverimg" size={"25px"} color="white" />
              </Link>
            </Tooltip>
          </HStack>
          <Flex
            textAlign={"justify"}
            justifyContent={"end"}
            alignItems={"end"}
            height={"100%"}
            zIndex={2}
          >
            <VStack maxW={"400px"}>
              <Text color={"white"}>
                Born in a small town in the north of Spain, currently living in
                Amsterdam. At the age of 27, with an educational background in
                sports and a working experience in very different industries, in
                September 2023 I decided to start my journey in web development.
              </Text>
              <Text color={"white"}>
                So here I am, to learn, to work, to fail, to succeed, to start
                over again. And hopefully to stay for a long time.
              </Text>
            </VStack>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
