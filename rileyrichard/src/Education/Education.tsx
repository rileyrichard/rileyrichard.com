import React from "react";
import AboutCodeBlock from "../CodeBlocks";

const Education: React.FC = () => {
  return (
    <div className="eduCodeBlock">
      <AboutCodeBlock
        code={
          '{\n   "post-secondary-education": {\n       "name": "University of Massachusetts Dartmouth",\n       "degree": "Computer Science",\n       "concentration": "Software Engineering",\n       "start_year": 2022,\n       "end_year": 2027\n   },\n   "secondary-education": {\n       "name": "Diman Regional Vocational Technical High School",\n       "concentration": "Programming and Web Development",\n       "start_year": 2018,\n       "end_year": 2022\n   }\n}'
        }
        language={"json"}
        showLineNumbers={false}
      />
    </div>
  );
};

export default Education;
