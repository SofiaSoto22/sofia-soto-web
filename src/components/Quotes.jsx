import { useState } from "react";
import { Box } from "@chakra-ui/react";
import quotesjson from "../quotes.json";
export default function Quotes() {
  function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const quotes = quotesjson.data;
  const [quote, setQuote] = useState(getRandomInteger(0, quotes.length - 1));
  return (
    <Box>
      <Box padding={2}>"{quotes[quote].quote}"</Box>
      <Box padding={2}>
        {quotes[quote].book} -{quotes[quote].author}
      </Box>
    </Box>
  );
}
