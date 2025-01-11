import React from "react";
import ContentFlow from "./ContentFlow";
import Skills from "./Skills";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
import experience from "../../data/experience.json";
import education from "../../data/education.json";
import certification from "../../data/certification.json";
import skills from "../../data/skills.json";
import codeSkills from "../../data/code-skills.json";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Experience Section */}
      <div className={styles.flowContainer}>
        <ContentFlow title="Experience" data={experience.items} />
      </div>
      <br />
      <br />

      {/* Education Section */}
      <div className={styles.flowContainer}>
        <ContentFlow title="Education" data={education.items} />
      </div>
      <br />
      <br />

      {/* Skills Section */}
      <Skills title="Skills" data={skills.items} />
      <br />
      <br />

      {/* Code Skills Section */}
      <Skills title="Code Skills" data={codeSkills.items} />
    </div>
  );
};

export default About;
