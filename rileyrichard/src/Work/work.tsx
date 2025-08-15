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
          <h2 className="workPosition">Extrusion/Autojig Operator</h2>
          <h3 className="workCompany">Acushnet Company</h3>
          <p className="workDuration">October 2024 - Present</p>
          <ul className="workResponsibilities">
            <li>
              Operate and maintain extrusion machinery and automated jigging
              systems in a high-volume production environment.
            </li>
            <li>
              Perform setup, calibration and troubleshooting of equipment to
              meet production specifications.
            </li>
            <li>
              Monitor product quality and adjust machine parameters as needed to
              ensure compliance with engineering and quality standards.
            </li>
            <li>
              Collaborate with quality assurance and maintenance teams to
              resolve equipment or product issues quickly.
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
