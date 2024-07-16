import { Grid, Image, Box, Flex } from "@chakra-ui/react";
import pics from "./pics.json";

export default function Artside() {
  const paintings = pics.pics;
  return (
    <Box
      fontFamily={"Cutive Mono"}
      backgroundColor={"black"}
      width={"100vw"}
      height={"100vh"}
      padding={"30px"}
    >
      <Grid
        className="no-scrollbar"
        padding={"50px"}
        border={"1px"}
        borderColor={"white"}
        height={"100%"}
        templateColumns="repeat(4, 1fr)"
        overflow={"auto"}
      >
        {paintings.map((painting) => (
          <Flex position={"relative"}>
            <Image
              objectFit={"cover"}
              key={painting.photo}
              padding={"40px"}
              src={painting.photo}
            ></Image>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
