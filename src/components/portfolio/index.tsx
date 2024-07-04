// Libraries
import React, { FunctionComponent } from "react";
import Divider from "@mui/material/Divider";
import ContentCard from "./content-cards";

// Styles
import styles from "./index.module.css";

// Data
import contents from "../../data/contents.json";

const Portfolio: FunctionComponent = ({}) => {
  return (
    <div>
      <text style={{ fontSize: "30px", fontWeight: "600" }}>Portfolio</text>
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
      <div className={styles.categoriesDiv}>
        <div className={styles.categoriesBtn}>
          <text>All</text>
        </div>
        <div className={styles.categoriesBtn}>
          <text>Certifications</text>
        </div>
        <div className={styles.categoriesBtn}>
          <text>Projects</text>
        </div>
      </div>
      <br />
      <div className={styles.contentCards}>
        {contents.items.map((item: any, index: number) => {
          return (
            <ContentCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
