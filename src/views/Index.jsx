import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.css";

import { SectionsDigital } from "./index-sections/SectionsDigital";
import { SectionsHeader } from "./index-sections/SectionsHeader";

export const Index = () => {
  return (
    <>
      <SectionsHeader />
      <SectionsDigital />
    </>
  );
};
