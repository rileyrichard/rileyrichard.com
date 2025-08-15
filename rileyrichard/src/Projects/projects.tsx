import React from "react";
import Amethyst from "./Past/amethyst";
import MickeyDees from "./Past/mickeydees";
import ClosetIQCLI from "./Past/closetiqcli";
import Mango from "./Past/mango";
import Kiwi from "./Past/kiwi";
import Pbbdev from "./Current/play.blueberry.dev";
import Bianry from "./Past/bianry";
import MickeyDeesReloaded from "./Current/mickeydeesreloaded";
import MercuryHomelab from "./Current/homelab";
import { Grid } from "@mantine/core";

const Projects: React.FC = () => {
  return (
    <div>
      <details className="details">
        <summary className="projectTitle">Current Projects</summary>

        <Pbbdev />
        <MercuryHomelab />
      </details>
      <details>
        <summary className="projectTitle">Paused Projects</summary>
        <MickeyDeesReloaded />
      </details>
      <details>
        <summary className="projectTitle">Archived Projects</summary>
        <Kiwi />
        <Bianry />
        <Mango />
        <ClosetIQCLI />
        <MickeyDees />
        <Amethyst />
      </details>
    </div>
  );
};

export default Projects;
