import React from "react";

const Kiwi: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://github.com/BlueberryTechnologies/Kiwi"
            target="_blank">
            Kiwi
          </a>{" "}
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Java-grey?logo=openjdk"
          />
          <img
            className="badges"
            alt="GitHub License"
            src="https://img.shields.io/github/license/BlueberryTechnologies/Kiwi"
          />
          <img
            className="badges"
            alt="GitHub Release"
            src="https://img.shields.io/github/v/release/BlueberryTechnologies/Kiwi"
          />
          <img
            className="badges"
            alt="GitHub Downloads (all assets, all releases)"
            src="https://img.shields.io/github/downloads/BlueberryTechnologies/Kiwi/total"
          />
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Public_Archive-yellow?logo=github"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A printer utility that generates various types of QR codes based on user
        input.
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li>Windows, MacOS, and Linux Support</li>
        <li className="listTitle">Code printing</li>
        <ul>
          <li>QR Codes</li>
          <li>Aztec Codes</li>
          <li>Code 128</li>
        </ul>
        <li className="listTitle">Image Printing</li>
        <li className="listTitle">
          Modify size, change destination, and preview the generated code.
        </li>
      </ul>
      <a
        className="projectLink"
        href="https://github.com/BlueberryTechnologies/Kiwi/releases/latest"
        target="_blank">
        Download Here!
      </a>
    </div>
  );
};

export default Kiwi;
