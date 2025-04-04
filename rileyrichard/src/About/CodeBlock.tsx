import React from "react";
import AboutCodeBlock from "./code";

const CodeBlocks: React.FC = () => {
  return (
    <div>
      <AboutCodeBlock
        code={
          '{\n  "education": {\n      "university": "UMass Dartmouth",\n      "degree": "Computer Science",\n      "start_year": 2022,\n      "end_year": 2027\n  }\n}'
        }
        language={"json"}
        showLineNumbers={false}
      />
      <hr />
      <AboutCodeBlock
        code={
          'def current_employer():\n    name = "Titleist"\n    position = "Extruder"\n    date_started = "October 2024"\n    date_ended = None\n\ndef past_employer():\n    name = "Best Buy"\n    position = "Customer Service Specialist"\n    date_started = "February 2022"\n    date_ended = "January 2025"\n\ndef work_experience():\n    print(current_employer())\n    print(past_employer())'
        }
        language={"python"}
        showLineNumbers={false}
      />
      <hr />
    </div>
  );
};

export default CodeBlocks;
