// Libraries
import React, { FunctionComponent } from "react";
import Divider from "@mui/material/Divider";
import BlogCard from "./blog-card";

// Styles
import styles from "./index.module.css";

// Data
import blogs from "../../data/blogs.json";

const Blog: FunctionComponent = ({}) => {
  return (
    <div>
      <text style={{ fontSize: "30px", fontWeight: "600" }}>Blog</text>
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
      <div className={styles.blogCards}>
        {blogs.items.map((item: any, index: number) => {
          return (
            <BlogCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
