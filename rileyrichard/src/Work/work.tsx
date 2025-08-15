import React from "react";

const Work: React.FC = () => {
  return (
    <div className="container">
      {/* Page Title */}
      <h1 className="workTitle">Work Experience</h1>
      <a className="resume" target="_blank" href="/Riley_Richard_Resume.pdf">
        You can download my resume{" "}
        <a
          className="resumeHere"
          target="_blank"
          href="/Riley_Richard_Resume.pdf">
          here
        </a>
        !
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
              Perform setup, calibration, and troubleshooting of equipment to
              meet production specifications.
            </li>
            <li>
              Monitor product quality and adjust machine parameters as needed to
              ensure compliance with engineering and quality standards.
            </li>
            <li>
              Applied problem-solving, attention to detail, and technical
              aptitude to maintain efficiency and prevent downtime.
            </li>
          </ul>
        </div>

        {/* Add more work entries as needed */}
        <div className="workEntry">
          <h2 className="workPosition">Customer Experience Specialist</h2>
          <h3 className="workCompany">Best Buy - North Dartmouth, MA</h3>
          <p className="workDuration">February 2022 - January 2025</p>
          <ul className="workResponsibilities">
            <li>
              Provided personalized assistance to customers, ensuring a positive
              in-store experience.
            </li>
            <li>
              Recommended products and services aligned with individual needs.
            </li>
            <li>
              Processed sales, returns, and exchanges efficiently to maintain
              satisfaction.
            </li>
            <li>
              Expanded technical knowledge through hands-on troubleshooting of
              consumer electronics and computer systems.
            </li>
          </ul>
        </div>
        <div className="workEntry">
          <h2 className="workPosition">Scrum Master / Project Manager</h2>
          <h3 className="workCompany">
            Diman Regional Vocational Technical High School
          </h3>
          <p className="workDuration">September 2021 - June 2022</p>
          <ul className="workResponsibilities">
            <li>
              Led a 10-member team to deliver game development projects on
              schedule.
            </li>
            <li>
              Applied Scrum framework to manage sprints and optimize workflow.
            </li>
            <li>
              Mentored team members on workload prioritization and Agile best
              practices.
            </li>
            <li>
              Developed VR applications using Unity, C#, GitHub, and Oculus
              Quest SDK.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
