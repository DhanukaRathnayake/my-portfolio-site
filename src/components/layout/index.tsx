// Libraries
import React from "react";
import dynamic from "next/dynamic";

// Styles
import styles from "./index.module.css";

// Components
import TopNavBar from "./top-navigation-bar";
import SideNavBar from "./side-navigation-bar";
const WelcomePage = dynamic(() => import("../welcome"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.mainDiv}>
      <WelcomePage />

      {/* Top Nav Bar */}
      <div className={styles.topDiv}>
        <TopNavBar />
      </div>

      {/* Main Div  */}
      <div className={styles.middleDiv}>
        <div className={styles.sideBarDiv}>
          <SideNavBar />
        </div>
        <div className={styles.dynamicMainDiv}>
          <main>{children}</main>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}></div>
    </div>
  );
};

export default Layout;
