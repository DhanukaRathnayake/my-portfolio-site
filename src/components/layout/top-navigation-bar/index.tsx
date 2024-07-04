// Libraries
import React, { FunctionComponent } from "react";
import Divider from "@mui/material/Divider";
import Dp from "./dp";
import DetailsOne from "./details-1";
import DetailsTwo from "./details-2";
import DetailsThree from "./details-3";

// Styles
import styles from "./index.module.css";

// Data
import data from "../../../data/main-info.json";
import picture from "../../../../public/dp.jpeg";

const TopNavBar: FunctionComponent = ({}) => {
  const handleDownloadClick = () => {
    const pdfUrl = data.cv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "dhanuka-rathnayake-cv.pdf";
    link.click();
  };

  return (
    <div className={styles.mainDiv}>
      {/* Larger View */}
      <div className={styles.dpDiv}>
        <Dp src={picture.src} />
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.detailsDivOne}>
          <DetailsOne data={data} />
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={styles.divider}
        />
        <div className={styles.detailsDivTwo}>
          <DetailsTwo data={data} />
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={styles.divider}
        />
        <div className={styles.detailsDivThree}>
          <DetailsThree data={data} handleDownloadClick={handleDownloadClick} />
        </div>
      </div>

      {/* Medium and Small Views */}
      <div className={styles.dpMediumDiv}>
        <Dp src={picture.src} />
      </div>
      <div className={styles.detailsMediumDivOne}>
        <DetailsOne data={data} />
      </div>

      <div className={styles.detailsMediumDiv}>
        <div className={styles.detailsMediumDivTwo}>
          <DetailsTwo data={data} />
        </div>
        <div className={styles.detailsMediumDivThree}>
          <DetailsThree data={data} handleDownloadClick={handleDownloadClick} />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
