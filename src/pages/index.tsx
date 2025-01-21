// Libraries
import React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

import PageLoader from "@/components/Common/Loaders/pageLoader";
import Home from "@/components/Home";
// const Home = dynamic(() => import("../components/Home"), {
//   ssr: true,
//   loading: () => <PageLoader />,
// });

const HomePage: NextPage<{}> = () => {
  return <Home />;
};

export default HomePage;
