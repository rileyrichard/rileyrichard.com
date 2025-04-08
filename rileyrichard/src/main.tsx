import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import { MantineProvider } from "@mantine/core";
import Tabs from "./tabs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <div className="container">
        <Header />
        <Tabs />
      </div>
    </MantineProvider>
  </StrictMode>
);
