// Libraries
import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

import PageLoader from "@/components/Common/Loaders/PageLoader";
const Services = dynamic(() => import("../../components/Services"), {
  ssr: true,
  loading: () => <PageLoader />,
});

const ServicesPage: NextPage<{}> = () => {
  return <Services />;
};

export default ServicesPage;
