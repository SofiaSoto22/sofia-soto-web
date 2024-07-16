import { Box, Grid, GridItem, Button, VStack } from "@chakra-ui/react";

import Navbar from "./components/Navbar.jsx";
import { Link } from "react-router-dom";

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
          <Navbar />
        </GridItem>
        <VStack marginTop={"100px"} spacing={10}>
          <Link to={"/artside"}>
            <Button
              backgroundColor={"#C0C0C0"}
              minWidth={"400px"}
              minHeight={"100px"}
            >
              Art Side
            </Button>
          </Link>
          <Link to={"/readingside"}>
            <Button
              backgroundColor={"#C0C0C0"}
              minWidth={"400px"}
              minHeight={"100px"}
            >
              Reading Side
            </Button>
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
}
