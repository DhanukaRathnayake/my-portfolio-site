// Libraries
import React from "react";
import dynamic from "next/dynamic";

// Styles
import styles from "./index.module.css";
import BlobBackground from "./background";

// Components
const TopNavBar = dynamic(() => import("./top-navigation-bar"));
const WelcomePage = dynamic(() => import("../welcome"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.mainDiv}>
      <BlobBackground />

      <WelcomePage />

      {/* Top Nav Bar */}
      <div className={styles.topDiv}>
        <TopNavBar />
      </div>

      {/* Main Div  */}
      <div className={styles.middleDiv}>
        <main>{children}</main>
      </div>

      {/* Footer */}
      <div className={styles.footer}></div>
    </div>
  );
};

export default Layout;
