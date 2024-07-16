import { Box, Grid, GridItem } from "@chakra-ui/react";

import CarouselQuotes from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
export default function Readingside() {
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
        <CarouselQuotes></CarouselQuotes>
      </Grid>
    </Box>
  );
}
