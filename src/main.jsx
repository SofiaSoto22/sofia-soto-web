import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Who from "./Who.jsx";
import Readingside from "./Readingside.jsx";
import Artside from "./Artside.jsx";
import Projects from "./Projects.jsx";
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
    path: "/who",
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
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who" element={<Who />} />
          <Route path="/artside" element={<Artside />} />
          <Route path="/readingside" element={<Readingside />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
