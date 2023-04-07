import React from "react";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Types from "./components/home/Types";
import Shopping from "./components/Shop/Shopping";
import Customize from "./components/experience/Customize";
import Photos from "./components/experience/Photos";
import Testimonials from "./components/experience/Testimonials";

function Maincomp() {
  return (
    <>
      <Home />
      <About />
      <Types />
      <Shopping />
      <Customize />
      <Photos />
      <Testimonials />
    </>
  );
}

export default Maincomp;
