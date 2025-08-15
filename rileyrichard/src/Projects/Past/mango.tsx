import React from "react";

const Mango: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://github.com/BlueberryTechnologies/Mango"
            target="_blank">
            Mango
          </a>{" "}
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Python-grey?logo=python"
          />
          <img
            className="badges"
            alt="GitHub License"
            src="https://img.shields.io/github/license/BlueberryTechnologies/Mango"
          />
          <img
            className="badges"
            alt="GitHub Release"
            src="https://img.shields.io/github/v/release/BlueberryTechnologies/Mango"
          />
          <img
            className="badges"
            alt="GitHub Downloads (all assets, all releases)"
            src="https://img.shields.io/github/downloads/BlueberryTechnologies/Mango/total"
          />
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Public_Archive-yellow?logo=github"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A simple Python password generator with a GUI.
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li>Support for 8-32 characters</li>
        <ul>
          <li>All numbers [0-9]</li>
          <li>Uppercase and lowercase letters [a-z] [A-Z]</li>
          <li>
            Various Symbols
            [@&#91;&#93;^_&#96;&#123;&#124;&#125;&#126;:;&lt;=&gt;?&#47;&#92;]
          </li>
        </ul>
        <li className="listTitle">
          Uses the current time as a seed to generate the password.
        </li>
        <li className="listTitle">
          Allows the user to specify characters to exclude from the generated
          password.
        </li>
      </ul>
      <a
        className="projectLink"
        href="https://github.com/BlueberryTechnologies/Mango/releases/latest"
        target="_blank">
        Download Here!
      </a>
    </div>
  );
};

export default Mango;
