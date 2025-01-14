import React from "react";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
import experience from "../../data/experience.json";
import education from "../../data/education.json";
import certification from "../../data/certification.json";
import { Timeline } from "../Common/Timeline";

type TimelineDataType = {
  title: string;
  date: string;
  contents: {
    description: string;
  }[];
  skills: string[];
};

const formattedData = (data: TimelineDataType[]) =>
  data.map((entry) => ({
    title: `${entry.title}`,
    date: entry.date,
    content: (
      <div>
        <ul className="list-disc pl-5">
          {entry.contents.map((content, index) => (
            <li key={index} className="mb-2">
              {content.description}
            </li>
          ))}
        </ul>
        <div className={styles.gradientTagContainer}>
          {entry.skills.map((tag, index) => (
            <div key={index} className={styles.gradientTag}>
              <div className={styles.gradientTagInner}>{tag}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Experience Section */}
      <div className={`${styles.flowContainer} primary-card`}>
        <Timeline
          data={formattedData(experience.items)}
          category={experience.category}
          description={experience.description}
        />
      </div>

      <br />

      {/* Education Section */}
      <div className={`${styles.flowContainer} primary-card`}>
        <Timeline
          data={formattedData(education.items)}
          category={education.category}
          description={education.description}
        />
      </div>
    </div>
  );
};

export default About;
