// Libraries
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  FaUser,
  FaFileAlt,
  FaDiceD20,
  FaBookOpen,
  FaBook,
} from "react-icons/fa";
import { useRouter } from "next/router";

// Styles
import styles from "./index.module.css";

const sideBarButtons = [
  {
    id: 1,
    title: "ABOUT",
    icon: <FaUser size="100%" />,
    path: "/",
  },
  {
    id: 2,
    title: "RESUME",
    icon: <FaFileAlt size="100%" />,
    path: "/resume",
  },
  // {
  //   id: 3,
  //   title: "PORTFOLIO",
  //   icon: <FaDiceD20 size="100%" />,
  //   path: "/portfolio",
  // },
  // {
  //   id: 4,
  //   title: "BLOG",
  //   icon: <FaBookOpen size="100%" />,
  //   path: "/blog",
  // },
  // {
  //   id: 5,
  //   title: "CONTACT",
  //   icon: <FaBook size="100%" />,
  //   path: "/contact",
  // },
];

const SideNavBar: FunctionComponent = ({}) => {
  const [selectedBtn, setSelectedBtn] = useState<string>("/");
  const router = useRouter();

  useEffect(() => {
    setSelectedBtn(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [router.pathname]);

  return (
    <div>
      <div className={styles.mainDiv}>
        {sideBarButtons.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.sideBarButton} 
            ${selectedBtn === item.path ? styles.selected : ""}`}
              onClick={() => {
                setSelectedBtn(item.path);
                router.push(item.path);
              }}
            >
              <div className={styles.sideBarIcon}>{item.icon}</div>
              <text>{item.title}</text>
            </div>
          );
        })}
      </div>

      {/* Smaller screen */}
      <div className={styles.mainMobileDiv}>
        {sideBarButtons.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.sideBarButton} 
            ${selectedBtn === item.path ? styles.selected : ""}`}
              onClick={() => {
                setSelectedBtn(item.path);
                router.push(item.path);
              }}
            >
              <div className={styles.sideBarIcon}>{item.icon}</div>
              <text>{item.title}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavBar;
