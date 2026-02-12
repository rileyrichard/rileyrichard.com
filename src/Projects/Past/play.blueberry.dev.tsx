import React from "react";

const Pbbdev: React.FC = () => {
  return (
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
        <li className="listTitle">Multiple Minecraft Versions Supported!</li>
      </ul>
      <a
        className="projectLink"
        href="https://play.blueberry.dev"
        target="_blank">
        Visit Here!
      </a>
    </div>
  );
};

export default Pbbdev;
