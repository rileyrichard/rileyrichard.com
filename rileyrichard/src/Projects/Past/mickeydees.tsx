import React from "react";

const MickeyDees: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://www.curseforge.com/minecraft/mc-mods/mickey-dees"
            target="_blank">
            MickeyDees
          </a>{" "}
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Java-grey?logo=openjdk"
          />
          <img
            className="badges"
            alt="GitHub License"
            src="https://img.shields.io/github/license/rileyrichard/amethyst"
          />
          <img
            className="badges"
            alt="CurseForge Downloads"
            src="https://img.shields.io/curseforge/dt/522046"
          />
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Public_Archive-yellow?logo=github"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A mod for Minecraft that adds various food items and ores inspired by
        McDonalds.
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li>Ores</li>
        <ul>
          <li>BBQ Ore</li>
          <li>Nuggie Ore</li>
        </ul>
        <li className="listTitle">Items</li>
        <ul>
          <li>Spatula</li>
          <li>Various Meals and Foods</li>
          <li>Sauces</li>
        </ul>
        <li className="listTitle">and much more!</li>
      </ul>
      <a
        className="projectLink"
        href="https://www.curseforge.com/minecraft/mc-mods/mickey-dees"
        target="_blank">
        Download Here!
      </a>
    </div>
  );
};

export default MickeyDees;
