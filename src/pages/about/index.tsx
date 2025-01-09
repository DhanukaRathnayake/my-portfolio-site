// Libraries
import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

import PageLoader from "@/components/common/loaders/pageLoader";
const About = dynamic(() => import("../../components/about"), {
  ssr: true,
  loading: () => <PageLoader />,
});

const AboutPage: NextPage<{}> = () => {
  return <About />;
};

export default AboutPage;
