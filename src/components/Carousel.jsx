import Carousel from "react-multi-carousel";
import { Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import quotesjson from "../quotes.json";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function CarouselQuotes() {
  const quotes = quotesjson.data;

  return (
    <Carousel responsive={responsive}>
      {quotes.map((quote) => (
        <Text textAlign={"center"} padding={"60px"}>
          {quote.quote} <br />
          {quote.book} - {quote.author}
        </Text>
      ))}
    </Carousel>
  );
}
