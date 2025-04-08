import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <h1 className="name">Riley Richard</h1>
      <h2 className="biz">
        Co-Founder @{" "}
        <a href="https://blueberry.dev" className="bbtech" target="_blank">
          Blueberry Technologies
        </a>
      </h2>
      <h3 className="loc">South Dartmouth, MA</h3>
      <p>
        I'm an undergraduate student at the University of Massachusetts
        Dartmouth. I love to have fun with the projects that I create.
      </p>
      <hr />
    </div>
  );
};

export default Header;
