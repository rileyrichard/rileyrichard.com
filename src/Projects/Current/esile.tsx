import React from "react";

const Esile: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://esile.net"
            target="_blank">
            esile.net
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
            src="https://img.shields.io/badge/Velocity-grey?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuOTQ5IDE1LjEzN2wtNC4yMi01Ljc1OGEuOTMuOTMgMCAwIDAtLjkzLS4zNmwtNi43MzEgMS4zNmEuOTMuOTMgMCAwIDAtLjYyNS40NThMLjExNiAxNi44NTJhLjkyLjkyIDAgMCAwIC4wNjMuOTk0bDQuMjMgNS43NzVhLjkzLjkzIDAgMCAwIC45My4zNmw2LjcxMS0xLjM1NWEuOTMuOTMgMCAwIDAgLjYyNC0uNDZsMy4zMzktNi4wMzJhLjkzLjkzIDAgMCAwLS4wNjQtLjk5N20tNC42NCA1Ljc5MWEuNzQ2Ljc0NiAwIDAgMS0xLjA0NC0uMTZsLTIuNDItMy4yOTdhMS4yNSAxLjI1IDAgMCAwLTEuMjQ4LS40ODRsLTQuMTAzLjgzYS43NDguNzQ4IDAgMCAxLS4zLTEuNDY2bDQuNDQ5LS45YTEuMjUgMS4yNSAwIDAgMCAuODQ0LS42MTdsMi4yMzItNC4wMzJhLjc0OC43NDggMCAwIDEgMS4zNy4xNTQuNzUuNzUgMCAwIDEtLjA2My41NjhMOC45NyAxNS4yNWExLjI1IDEuMjUgMCAwIDAgLjA4NSAxLjM0bDIuNDIgMy4yOTVhLjc1Ljc1IDAgMCAxLS4xNjQgMS4wNDNtMTguNjk5LTQuNzQ2YS43NjcuNzY3IDAgMSAwIDAtMS41MzQuNzY3Ljc2NyAwIDAgMCAwIDEuNTM0IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTMzLjI3NiAxNy43MTZIMTkuNDAzYS43NjcuNzY3IDAgMCAxIDAtMS41MzRoOC4yOWEuNzY4Ljc2OCAwIDAgMCAwLTEuNTM1aC01LjQ3OWEuNzY3Ljc2NyAwIDEgMSAwLTEuNTM0aDguM2EuNzY4Ljc2OCAwIDAgMCAwLTEuNTM1SDEzLjM0bDIuNjA4IDMuNTZhLjkzLjkzIDAgMCAxIC4wNjQuOTk0bC0zLjMzOSA2LjAzMmExIDEgMCAwIDEtLjEwOS4xNTZIMjkuMTNhLjc2Ny43NjcgMCAxIDAgMC0xLjUzNGgtNC4xNzdhLjc2OC43NjggMCAxIDEgMC0xLjUzNWg4LjMyM2EuNzY5Ljc2OSAwIDEgMCAwLTEuNTM1IiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+"
          />
        </h1>
      </div>
      <p className="projectSummary">
        A Minecraft Network that is available to Java players with advanced
        minigames and amazing core functionality.
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li>HCF, Kitmap, UHC, Practice, and More</li>
        <li className="listTitle">Various plugins and QoL enhancements</li>
        <li className="listTitle">Multiple Minecraft Versions Supported!</li>
      </ul>
      <a className="projectLink" href="https://esile.net" target="_blank">
        Visit Here!
      </a>
    </div>
  );
};

export default Esile;
