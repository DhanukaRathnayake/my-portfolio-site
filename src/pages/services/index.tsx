// Libraries
import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

import PageLoader from "@/components/common/loaders/pageLoader";
const Services = dynamic(() => import("../../components/services"), {
  ssr: true,
  loading: () => <PageLoader />,
});

const ServicesPage: NextPage<{}> = () => {
  return <Services />;
};

export default ServicesPage;
