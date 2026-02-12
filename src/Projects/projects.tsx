import React from "react";
import Amethyst from "./Past/amethyst";
import MickeyDees from "./Past/mickeydees";
import ClosetIQCLI from "./Past/closetiqcli";
import Mango from "./Past/mango";
import Kiwi from "./Past/kiwi";
import Pbbdev from "./Past/play.blueberry.dev";
import Bianry from "./Past/bianry";
import MickeyDeesReloaded from "./Past/mickeydeesreloaded";
import MercuryHomelab from "./Current/homelab";
import Esile from "./Current/esile";

const Projects: React.FC = () => {
  return (
    <div>
      <details className="details">
        <summary className="projectTitle">Current Projects</summary>
        <Esile />
        <MercuryHomelab />
      </details>
      <details>
        <summary className="projectTitle">Archived Projects</summary>
        <MickeyDeesReloaded />
        <Pbbdev />
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
