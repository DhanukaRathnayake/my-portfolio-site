// Libraries
import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

import PageLoader from "@/components/Common/Loaders/pageLoader";
const About = dynamic(() => import("../../components/About"), {
  ssr: true,
  loading: () => <PageLoader />,
});

const AboutPage: NextPage<{}> = () => {
  return <About />;
};

export default AboutPage;
