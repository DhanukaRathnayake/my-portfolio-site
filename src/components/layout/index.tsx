// Libraries
import React, { useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Components
import TopNavBar from "./top-navigation-bar";
import SideNavBar from "./side-navigation-bar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const container: any = document.querySelector(".pattern-container");
    const colors = ["#FF6B6B", "#3D8AF7", "#FFE66D", "#55E7A0"]; // Define your color palette

    function createCubicElement() {
      const cubicElement = document.createElement("div");
      cubicElement.classList.add("cubic-element");
      cubicElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      cubicElement.style.left = `${Math.random() * 100}%`;
      cubicElement.style.top = `${Math.random() * 100}%`;
      container.appendChild(cubicElement);
    }

    // Generate a desired number of cubic elements
    const numCubicElements = 100; // Adjust the number as needed

    for (let i = 0; i < numCubicElements; i++) {
      createCubicElement();
    }
  }, []);
  return (
    <div className={styles.mainDiv}>
      <div className="pattern-container"></div>

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
