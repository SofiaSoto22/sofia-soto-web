import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink to={"/"} className="hovertext">
            Home
          </NavLink>
          <NavLink to={"/who"} className="hovertext">
            Who am I
          </NavLink>
          <Text className="hovertext">Projects</Text>
        </VStack>
      </Box>
    </Box>
  );
}
