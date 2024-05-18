import {
  Box,
  Text,
  Heading,
  HStack,
  Tooltip,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Quotes from "./components/Quotes";
export default function Who() {
  return (
    <Box
      fontFamily={"Cutive Mono"}
      backgroundColor={"black"}
      width={"100vw"}
      height={"100vh"}
      padding={"30px"}
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={10}
        position={"relative"}
        height={"100%"}
        padding={"50px"}
        border={"1px"}
        borderColor={"white"}
        color={"white"}
      >
        <GridItem>
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
            <Text className="hovertext">Contact</Text>
          </Box>
        </GridItem>
        <GridItem alignContent={"center"}>
          <Quotes></Quotes>
        </GridItem>
      </Grid>
    </Box>
  );
}
