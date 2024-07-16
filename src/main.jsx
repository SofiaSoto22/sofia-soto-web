import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Who from "./Who.jsx";
import Readingside from "./Readingside.jsx";
import Artside from "./Artside.jsx";
import "./Main.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/whoAmI",
    element: <Who />,
  },
  {
    path: "/readingside",
    element: <Readingside />,
  },
  {
    path: "/artside",
    element: <Artside />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoAmI" element={<Who />} />
          <Route path="/artside" element={<Artside />} />
          <Route path="/readingside" element={<Readingside />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
