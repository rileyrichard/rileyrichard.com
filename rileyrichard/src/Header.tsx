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
      <h2 className="emailHeader">
        <a
          href="mailto:riley@blueberry.dev"
          className="emailHeader"
          target="_blank">
          riley@blueberry.dev
        </a>
      </h2>

      <h3 className="loc">South Dartmouth, MA</h3>
      <p>
        I'm a Computer Science undergraduate student at the University of
        Massachusetts Dartmouth. I enjoy making fun obscure things as well as
        dealing with the challenges that come along with it.
      </p>
      <hr />
    </div>
  );
};

export default Header;
