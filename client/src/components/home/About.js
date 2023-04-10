import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <LeftContainer>
        <h1>My Story</h1>
        <p>
          Coffee is just a morning beverage for a lot of you reading this, but
          for me, it is comfort. It is a token of love and appreciation for the
          people I extremely care about. Whether it be going on long walks with
          vanilla latte in drunken monkey&#39;s glass bottles, or making beated
          frothy coffee in hostel mess for all my friends coming for breakfast,
          the love grew stronger and brought dozens of smiles and happiness for
          those seeking that one good cup of coffee in the campus. Be it hot or
          be it cold, the froth is always the best part of it all. To celebrate
          and spread this feeling of love and comfort, I brewed this brand for
          you, so you don&#39;t miss out on the best coffee.{" "}
        </p>
        <h5>~ Yogit Nainani</h5>
      </LeftContainer>
      <RightContainer>
        <img src="./aboutPhoto.svg" alt="Yogit Nainani" />
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #7f5837;
  max-width: 100%;
  justify-content: space-evenly;
  position: relative;
`;

const LeftContainer = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 7em;
    line-height: 1em;

    letter-spacing: 0.07rem;
    text-transform: uppercase;

    color: #533727;
    margin-bottom: 2rem;
    margin-top: 4rem;
  }

  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-size: 1rem;
    line-height: 1.2em;
    text-align: justify;

    color: #f4f4f4;
    margin-bottom: 2rem;
  }

  h5 {
    color: #bfa17f;
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3rem;

    margin-bottom: 4rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: relative;
  img {
    max-width: 24em;
    min-height: 100%;
    margin-top: 4rem;
  }
`;

export default About;
