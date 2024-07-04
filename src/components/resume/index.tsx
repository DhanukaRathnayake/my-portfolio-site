// Libraries
import React, { FunctionComponent } from "react";
import Divider from "@mui/material/Divider";
import ContentFlow from "./content-flow";
import Skills from "./skills";

// Styles
import styles from "./index.module.css";

// Data
import experience from "../../data/experience.json";
import education from "../../data/education.json";
import certification from "../../data/certification.json";
import skills from "../../data/skills.json";
import codeSkills from "../../data/code-skills.json";

const Resume: FunctionComponent = ({}) => {
  return (
    <div>
      <text style={{ fontSize: "30px", fontWeight: "600" }}>Resume</text>
      <Divider
        flexItem
        style={{
          backgroundColor: "#0071ff",
          height: "6px",
          width: "100px",
          borderRadius: "10px",
        }}
      />
      <br />
      <ContentFlow title="Experience" data={experience.items} />
      <br />
      <br />
      <div className={styles.educationRowDiv}>
        <div className={styles.contestFlow}>
          <ContentFlow title="Education" data={education.items} />
        </div>
        {/* <div className={styles.contestFlow}>
          <ContentFlow title="Certifications" data={certification.items} />
        </div> */}
      </div>
      <br />
      <br />
      <Skills title="Skills" data={skills.items} />
      <br />
      <br />
      <Skills title="Code Skills" data={codeSkills.items} />
    </div>
  );
};

export default Resume;
