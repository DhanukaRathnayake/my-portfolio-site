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
import { Timeline } from "../Common/Timeline";

const formattedData = experience.items.map((entry) => ({
  title: `${entry.title}`,
  date: entry.date,
  content: (
    <div>
      <ul className="list-disc pl-5">
        {entry.contents.map((content) => (
          <li key={content.id} className="mb-2">
            {content.description}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        <strong>Skills:</strong> {entry.skills}
      </p>
    </div>
  ),
}));

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Experience Section */}
      <div className={styles.flowContainer}>
        <Timeline data={formattedData} />
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
