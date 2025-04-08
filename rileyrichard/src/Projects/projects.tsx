import React from "react";

const Projects: React.FC = () => {
  return (
    <div>
      <details className="details">
        <summary className="projectTitle">Current Projects</summary>
        <div className="projectDiv">
          <div>
            <h1 className="projectName">
              <a
                className="projectLinkHeader"
                href="https://github.com/BlueberryTechnologies/Bianry"
                target="_blank">
                Bianry
              </a>{" "}
              <img
                className="badges"
                alt="Static Badge"
                src="https://img.shields.io/badge/Python-grey?logo=python"
              />
              <img
                className="badges"
                alt="GitHub License"
                src="https://img.shields.io/github/license/BlueberryTechnologies/Bianry"
              />
            </h1>
          </div>
          <p className="projectSummary">
            A better work in progress password generator forked from Mango.
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
              Allows the user to specify characters to exclude from the
              generated password.
            </li>
          </ul>
          <p className="projectFeatures">Coming Soon</p>
          <ul className="projectList">
            <li>Embed the user's password into images (BMP and PNG)</li>
          </ul>

          <a
            className="projectLink"
            href="https://github.com/BlueberryTechnologies/Kiwi/releases/latest"
            target="_blank">
            Download Here!
          </a>
        </div>
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
            </h1>
          </div>
          <p className="projectSummary">
            A printer utility that generates various types of QR codes based on
            user input.
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
        <div className="projectDiv">
          <div>
            <h1 className="projectName">
              <a
                className="projectLinkHeader"
                href="https://play.blueberry.dev"
                target="_blank">
                play.blueberry.dev
              </a>{" "}
              <img
                className="badges"
                alt="Static Badge"
                src="https://img.shields.io/badge/Java-grey?logo=openjdk"
              />
              <img
                className="badges"
                alt="Static Badge"
                src="https://img.shields.io/badge/Paper-grey?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIzLjk4NyAxLjAwNCAyMC41NiAyMS41NzZhLjg2Ljg2IDAgMCAxLS44NDQuNzEuOS45IDAgMCAxLS4zMjItLjA2OGwtNi4wNjctMi40NzctMy4yNCAzLjk1YS44My44MyAwIDAgMS0uNjU3LjMwOS44LjggMCAwIDEtLjI5NS0uMDU0Ljg1Ljg1IDAgMCAxLS41NjItLjgwM1YxOC40N0wyMC4xNDMgNC4yODYgNS44MjcgMTYuNjc0bC01LjI5LTIuMTdBLjg1Ljg1IDAgMCAxIDAgMTMuNzY4YS44Ny44NyAwIDAgMSAuNDI5LS43OUwyMi43MTUuMTJhLjgzLjgzIDAgMCAxIC40MjgtLjEyLjg1My44NTMgMCAwIDEgLjg0NCAxLjAwNCIgc3R5bGU9Ii0tZGFya3JlYWRlci1pbmxpbmUtZmlsbDogdmFyKC0tZGFya3JlYWRlci10ZXh0LWZmZmZmZiwgI2U4ZTZlMyk7IiBkYXRhLWRhcmtyZWFkZXItaW5saW5lLWZpbGw9IiI+PC9wYXRoPjwvc3ZnPg=="
              />
              <img
                className="badges"
                alt="Static Badge"
                src="https://img.shields.io/badge/Waterfall-grey?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDIwYTYgNiAwIDAgMS02LTZjMC00IDYtMTAuNzUgNi0xMC43NVMxOCAxMCAxOCAxNGE2IDYgMCAwIDEtNiA2IiBzdHlsZT0iLS1kYXJrcmVhZGVyLWlubGluZS1maWxsOiB2YXIoLS1kYXJrcmVhZGVyLXRleHQtZmZmZmZmLCAjZThlNmUzKTsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbD0iIj48L3BhdGg+PC9zdmc+"
              />
            </h1>
          </div>
          <p className="projectSummary">
            A Minecraft Server that is available to Java and Bedrock Players.
          </p>
          <p className="projectFeatures">Features</p>
          <ul className="projectList">
            <li>Survival, Creative and Hardcore gamemodes</li>
            <li className="listTitle">Various plugins and QoL enhancements</li>
            <li className="listTitle">
              Multiple Minecraft Versions Supported!
            </li>
          </ul>
          <a
            className="projectLink"
            href="https://play.blueberry.dev"
            target="_blank">
            Visit Here!
          </a>
        </div>
      </details>
      <details>
        <summary className="projectTitle">Past Projects</summary>

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
              Allows the user to specify characters to exclude from the
              generated password.
            </li>
          </ul>
          <a
            className="projectLink"
            href="https://github.com/BlueberryTechnologies/Mango/releases/latest"
            target="_blank">
            Download Here!
          </a>
        </div>
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
                alt="CurseForge Version"
                src="https://img.shields.io/curseforge/v/522046"
              />
            </h1>
          </div>
          <p className="projectSummary">
            A mod for Minecraft that adds various food items and ores inspired
            by McDonalds.
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
      </details>
    </div>
  );
};

export default Projects;
