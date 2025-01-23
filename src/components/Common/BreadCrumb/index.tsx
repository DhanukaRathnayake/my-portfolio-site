// components/Breadcrumb.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./index.module.css"; // Import the CSS module

const Breadcrumb: React.FC = () => {
  const router = useRouter();

  // Remove query parameters and hash fragments from the pathname
  const cleanPathname = router.asPath.split("?")[0].split("#")[0];

  // Split the cleaned pathname into segments and filter out empty strings
  const pathnames = cleanPathname.split("/").filter((x) => x);

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={href}>
              {isLast ? (
                <span aria-current="page">{value}</span>
              ) : (
                <Link href={href}>{value}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
