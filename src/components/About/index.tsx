import React from "react";

// Components
import Tags from "@/components/Common/Tags";

// Styles
import styles from "./index.module.css"; // Renamed for clarity

// Data
import { Education, Experience, Certification } from "../../data/info";
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
        <ul className="list-disc p-10 sm:p-12 primary-card">
          {entry.contents.map((content, index) => (
            <li key={index} className={`${styles.description}`}>
              {content.description}
            </li>
          ))}
        </ul>

        {entry.skills.length > 0 && (
          <div className="mt-6">
            <Tags tags={entry.skills} />
          </div>
        )}
      </div>
    ),
  }));

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Experience Section */}
      <div className={`${styles.flowContainer}`}>
        <Timeline
          data={formattedData(Experience.items)}
          category={Experience.category}
          description={Experience.description}
        />
      </div>

      <br />

      {/* Education Section */}
      <div className={`${styles.flowContainer}`}>
        <Timeline
          data={formattedData(Education.items)}
          category={Education.category}
          description={Education.description}
        />
      </div>
    </div>
  );
};

export default About;
