import React from "react";

const Amethyst: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://github.com/rileyrichard/Amethyst"
            target="_blank">
            Amethyst
          </a>{" "}
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/JavaScript-grey?logo=javascript"
          />
          <img
            className="badges"
            alt="GitHub License"
            src="https://img.shields.io/github/license/rileyrichard/amethyst"
          />
          <img
            className="badges"
            alt="Static Badge"
            src="https://img.shields.io/badge/Public_Archive-yellow?logo=github"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A basic Discord music bot using Discord.js v12.
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li>Implement various commands such as</li>
        <ul>
          <li>play</li>
          <li>stop</li>
          <li>loop</li>
          <li>volume</li>
          <li>and many more</li>
        </ul>
        <li className="listTitle">
          Retrieve/change the bot's status and various information
        </li>
      </ul>
      <a
        className="projectLink"
        href="https://github.com/rileyrichard/Amethyst"
        target="_blank">
        Download Here!
      </a>
    </div>
  );
};

export default Amethyst;
