import {
  Grid,
  Image,
  Box,
  Flex,
  Button,
  Text,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import pics from "./pics.json";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function Artside() {
  const [paintingList, setPaintingList] = useState([]);
  const [techniqueFilter, setTechniqueFilter] = useState("");
  const paintings = pics.pics;
  useEffect(() => {
    setPaintingList(Object.values(paintings));
  }, []);

  const filterbyTechnique = (usedtechnique) => {
    setTechniqueFilter(usedtechnique);
    var result = Object.values(paintings).filter((obj) => {
      return obj.technique === usedtechnique;
    });
    console.log(usedtechnique);
    console.log(result);
    setPaintingList(result);
  };
  return (
    <Box
      fontFamily={"Cutive Mono"}
      backgroundColor={"black"}
      width={"100vw"}
      height={"100vh"}
      padding={"30px"}
    >
      <Grid
        padding={"50px"}
        border={"1px"}
        borderColor={"white"}
        height={"100%"}
        templateColumns="1fr 3fr"
      >
        <GridItem className="no-scrollbar">
          <Navbar></Navbar>
          <Box position={"absolute"} bottom={"12%"}>
            <Text
              cursor={"pointer"}
              color={"white"}
              onClick={() => filterbyTechnique("watercolor")}
              className={techniqueFilter == "watercolor" ? "active" : ""}
            >
              Watercolor
            </Text>
            <Text
              cursor={"pointer"}
              color={"white"}
              onClick={() => filterbyTechnique("pencil")}
              className={techniqueFilter == "pencil" ? "active" : ""}
            >
              Pencil
            </Text>
            <Text
              cursor={"pointer"}
              color={"white"}
              onClick={() => filterbyTechnique("acrylic")}
              className={techniqueFilter == "acrylic" ? "active" : ""}
            >
              Acrylic
            </Text>
            <Text
              cursor={"pointer"}
              color={"white"}
              onClick={() => filterbyTechnique("illustration")}
              className={techniqueFilter == "illustration" ? "active" : ""}
            >
              Illustration
            </Text>
          </Box>
        </GridItem>
        <Grid
          gridTemplateColumns={"repeat(3,1fr)"}
          overflow={"auto"}
          className="no-scrollbar"
        >
          {paintingList.map((painting) => (
            <Flex key={painting.photo} position={"relative"}>
              <Image
                objectFit={"cover"}
                padding={"10px"}
                src={painting.photo}
              ></Image>
            </Flex>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
