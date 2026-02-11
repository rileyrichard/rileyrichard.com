import React from "react";

const MickeyDeesReloaded: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://www.github.com/BlueberryTechnologies/MickeyDeesReloaded" // Change to modrinth when mod is released
            target="_blank">
            MickeyDeesReloaded
          </a>{" "}
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Java-grey?logo=openjdk"
          />
          <img
            className="badges"
            alt="GitHub License"
            src="https://img.shields.io/github/license/BlueberryTechnologies/MickeyDeesReloaded"
          />
          <img
            className="badges"
            alt="Modrinth Version"
            src="https://img.shields.io/modrinth/v/mickeydeesreloaded"
          />
          <img
            className="badges"
            alt="Modrinth Downloads"
            src="https://img.shields.io/modrinth/dt/mickeydeesreloaded"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A famous restaurant chain coming back to the Overworld!
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li className="listTitle">Custom Ores!</li>
        <li className="listTitle">Custom Foods!</li>
        <li className="listTitle">Custom Items!</li>
        <li className="listTitle">and much more!</li>
      </ul>
      <a
        className="projectLink"
        href="https://www.github.com/BlueberryTechnologies/MickeyDeesReloaded" // Change to modrinth when mod is released
        target="_blank">
        Download Here!
      </a>
    </div>
  );
};

export default MickeyDeesReloaded;
