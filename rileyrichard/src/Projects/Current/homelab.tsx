import React from "react";

const MercuryHomelab: React.FC = () => {
  return (
    <div className="projectDiv">
      <div>
        <h1 className="projectName">
          <a
            className="projectLinkHeader"
            href="https://blueberry.dev"
            target="_blank">
            Mercury Homelab
          </a>{" "}
        </h1>
      </div>
      <p className="projectSummary">
        My custom homelab setup for Blueberry Technologies and other personal
        projects!
      </p>
      <p className="projectFeatures">Features</p>
      <ul className="projectList">
        <li className="listTitle">Proxmox PVE</li>
        <li className="listTitle">PiHole</li>
        <li className="listTitle">Samba Server</li>
        <li className="listTitle">and much more!</li>
      </ul>
      <a className="projectLink" href="https://blueberry.dev" target="_blank">
        Read more here!
      </a>
    </div>
  );
};

export default MercuryHomelab;
