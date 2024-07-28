import Navbar from "./components/Navbar";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function Projects() {
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
        <GridItem>
          <Navbar> </Navbar>
        </GridItem>
        <Box
          overflow={"auto"}
          className="no-scrollbar"
          fontFamily={"Cutive Mono"}
          color={"white"}
        >
          <HStack
            marginBottom={"20px"}
            className="hoverproject"
            alignItems={"start"}
          >
            <Image
              marginTop={"10px"}
              marginRight={"20px"}
              maxHeight={"100px"}
              src="/project1.jpg"
            ></Image>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={20} fontWeight={"bold"}>
                MY COMIC LAB
              </Text>
              <Text>
                Personal website for a comic book collector, that shows his
                collection filtered by publisher and age, the comics for sale as
                well as the last updates of his YouTube channel.
              </Text>
            </VStack>
          </HStack>
          <HStack
            marginBottom={"20px"}
            className="hoverproject"
            alignItems={"start"}
          >
            <Image
              marginTop={"10px"}
              marginRight={"20px"}
              maxHeight={"100px"}
              src="/project2.jpg"
            ></Image>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={20} fontWeight={"bold"}>
                EL TABLON
              </Text>
              <Text>
                First big exercise faking a gym where I used API calls to obtain
                and filter the data
              </Text>
            </VStack>
          </HStack>
          <HStack className="hoverproject" alignItems={"start"}>
            <Image
              marginTop={"10px"}
              marginRight={"50px"}
              marginLeft={"50px"}
              maxHeight={"100px"}
              src="/project3.jpg"
            ></Image>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={20} fontWeight={"bold"}>
                SMALL PROJECTS
              </Text>
              <Text>First small projects with which I started to learn</Text>
            </VStack>
          </HStack>
          <HStack className="hoverproject" alignItems={"start"}>
            <Image
              marginTop={"10px"}
              marginRight={"20px"}
              maxHeight={"100px"}
              src="/project4.jpg"
            ></Image>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={20} fontWeight={"bold"}>
                PERSONAL WEBSITE
              </Text>
              <Text>Where you are right now. A personal space where I show my portfolio as well as some personal likings.</Text>
            </VStack>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
}
