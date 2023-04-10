import React from "react";
import styled from "styled-components";

function Customize() {
  return (
    <Container>
      <h1>Customize</h1>
      <p>Coming soon...</p>
      <img src="./fomo/fomo.png" alt="Coffee machine" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #533727;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 7rem;
    line-height: 8rem;

    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding-top: 2.625rem;

    color: #bfa17f;
  }

  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: #bfa17f;
  }

  img {
    max-width: 25rem;
  }
`;

export default Customize;
