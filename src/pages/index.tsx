// Libraries
import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import Home from "../components/Home";

const HomePage: NextPage<{}> = () => {
  return <Home />;
};

export default HomePage;
