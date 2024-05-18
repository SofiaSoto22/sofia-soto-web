import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  Image,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
          <Image
            id="img"
            display={"none"}
            height={"450px"}
            src="/src/assets/imghome.jpg"
            position={"absolute"}
            zIndex={1}
          ></Image>
          <Box zIndex={2} position={"relative"}>
            <Heading
              fontFamily={"Cutive Mono"}
              fontWeight={"bold"}
              color={"white"}
            >
              Sofía Soto
            </Heading>
            <Text color={"white"}>Web Developer</Text>
            <Box marginTop={"50px"} color={"white"}>
              <Text className="hovertext">Home</Text>
              <Text className="hovertext">Who am I</Text>
              <Text className="hovertext">Projects</Text>
            </Box>
          </Box>
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
