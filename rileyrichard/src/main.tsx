import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CodeBlocks from "./About/CodeBlock";
import Head from "./About/head";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Head />
      <CodeBlocks />
    </MantineProvider>
  </StrictMode>
);
