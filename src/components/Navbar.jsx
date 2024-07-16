import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box>
      <Image
        id="img"
        display={"none"}
        height={"450px"}
        src="/src/assets/imghome.jpg"
        position={"absolute"}
        zIndex={1}
      ></Image>
      <Box zIndex={2} position={"relative"}>
        <Heading fontFamily={"Cutive Mono"} fontWeight={"bold"} color={"white"}>
          Sofía Soto
        </Heading>
        <Text color={"white"}>Web Developer</Text>
        <VStack alignItems={"flex-start"} marginTop={"50px"} color={"white"}>
          <Link to={"/"} className="hovertext">
            Home
          </Link>
          <Link to={"/whoAmI"} className="hovertext">
            Who am I
          </Link>
          <Text className="hovertext">Projects</Text>
        </VStack>
      </Box>
    </Box>
  );
}
