import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import About from "./Home/About";
import Types from "./Home/Types";
import BuyCoffee from "./Home/BuyCoffee";
import Customize from "./Home/Customize";
import Photos from "./Home/Photos";
import Testimonials from "./Home/Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./homepage.svg" alt="Home page" />
      </Banner>
      <About />
      <Types />
      <BuyCoffee />
      <Customize />
      <Photos />
      <Testimonials />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;

  img {
    width: 100%;
    position: relative;
    top: 4px;
  }
`;

export default Home;
