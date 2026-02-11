import React from "react";

const ClosetIQCLI: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://github.com/BlueberryTechnologies/ClosetIQ-CLI"
            target="_blank">
            ClosetIQ-CLI
          </a>{" "}
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/C-grey?logo=c"
          />
          <img
            className="badges"
            alt="GitHub License"
            src="https://img.shields.io/github/license/BlueberryTechnologies/Mango"
          />
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Public_Archive-yellow?logo=github"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A virtual closet that allows you to store clothes in.
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li>Adding and removing clothes</li>
        <ul>
          <li>Describe clothes by color, type, and quantity</li>
          <li>Remove clothing by a given index</li>
        </ul>
        <li className="listTitle">Display the current closet</li>
        <li className="listTitle">Read and write the closet to a file</li>
      </ul>
      <a
        className="projectLink"
        href="https://github.com/BlueberryTechnologies/ClosetIQ-CLI"
        target="_blank">
        Download Here!
      </a>
    </div>
  );
};

export default ClosetIQCLI;
