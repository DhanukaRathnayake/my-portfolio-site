// Libraries
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

// Styles
import styles from "./index.module.css";

interface LinkStateProps {
  data: any;
}

type Props = LinkStateProps;

const DetailsOne: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className={styles.detailsOne}>
      <text className={styles.firstNameTxt}>
        {data.firstName + " "}
        <text className={styles.lastNameTxt}>{data.lastName}</text>
      </text>
      <br />
      <text className={styles.roleTxt}>{data.roles}</text>
      <div className={styles.socialMediaIconsDiv}>
        <Link
          href={data.socialMediaPlatforms.linkedIn}
          target="_blank"
          className={`${styles.socialMediaIcon}  ${styles.iconLinkedIn}`}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href={data.socialMediaPlatforms.github}
          target="_blank"
          className={`${styles.socialMediaIcon}  ${styles.iconGithub}`}
        >
          <FaGithub />
        </Link>
        <Link
          href={data.socialMediaPlatforms.upwork}
          target="_blank"
          className={`${styles.socialMediaIcon}  ${styles.iconUpWork}`}
        >
          <SiUpwork />
        </Link>
        <Link
          href={data.socialMediaPlatforms.fiver}
          target="_blank"
          className={`${styles.socialMediaIcon}  ${styles.iconFiver}`}
        >
          <TbBrandFiverr />
        </Link>
        <Link
          href={data.socialMediaPlatforms.medium}
          target="_blank"
          className={`${styles.socialMediaIcon}  ${styles.iconMedium}`}
        >
          <BsMedium />
        </Link>
      </div>
    </div>
  );
};

export default DetailsOne;
