import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <p>
        If you wish to contact me, my email is{" "}
        <a className="email" href="mailto:riley@blueberry.dev">
          riley@blueberry.dev
        </a>
      </p>
      <p>
        My timezone is Eastern Standard Time (UTC-04:00). I usually respond to
        emails during normal working hours, but I occasionally code late at
        night and I will respond then.
      </p>
      <p>
        You can also find me on GitHub{" "}
        <a
          className="email"
          href="https://github.com/rileyrichard"
          target="_blank">
          @rileyrichard
        </a>
      </p>
    </div>
  );
};

export default Contact;
