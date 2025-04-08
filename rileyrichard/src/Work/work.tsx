import React from "react";

const Work: React.FC = () => {
  return (
    <div className="container">
      {/* Page Title */}
      <h1 className="workTitle">Work Experience</h1>
      <a className="resume" target="_blank" href="/resume.pdf">
        You can download my resume here!
      </a>
      {/* Work Experience Section */}
      <div className="workSection">
        {/* Example Work Entry */}
        <div className="workEntry">
          <h2 className="workPosition">Co-Founder / Lead Developer</h2>
          <h3 className="workCompany">Blueberry Technologies</h3>
          <p className="workDuration">July 2022 - Present</p>
          <ul className="workResponsibilities">
            <li>
              Developed and maintained various projects and services using
              multiple languages and frameworks.
            </li>
            <li>
              Collaborated with a team of developers to implement new features
              and services.
            </li>
          </ul>
        </div>

        {/* Add more work entries as needed */}
        <div className="workEntry">
          <h2 className="workPosition">Customer Experience Specialist</h2>
          <h3 className="workCompany">Best Buy - North Dartmouth, MA</h3>
          <p className="workDuration">February 2022 - January 2025</p>
          <ul className="workResponsibilities">
            <li>Greets, welcomes, and engages with customers.</li>
            <li>
              Uses acquired skills and knowledge to recommend products and
              services to meet the customer's needs.
            </li>
            <li>Assists customers with orders, returns, and exchanges.</li>
          </ul>
        </div>
        <div className="workEntry">
          <h2 className="workPosition">Scrum Master / Project Manager</h2>
          <h3 className="workCompany">
            Diman Regional Vocational Technical High School
          </h3>
          <p className="workDuration">September 2021 - June 2022</p>
          <ul className="workResponsibilities">
            <li>Led a team of 10 in a fast-paced work environment.</li>
            <li>Completed projects in a timely manner.</li>
            <li>Followed the Scrum Framework in game development.</li>
            <li>Coached team members on workload management.</li>
            <li>
              Experienced in Unity, C#, GitHub, Oculus (Meta) Quest, and Virtual
              Reality Applications.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
