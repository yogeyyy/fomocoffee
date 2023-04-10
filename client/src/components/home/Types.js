import React from "react";
import styled from "styled-components";

function Types() {
  return (
    <Container>
      <Gradient>
        <h1>Types</h1>
      </Gradient>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  min-height: 40em;
  background: url(types.jpg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
  z-index: -1;
  text-align: center;
`;

const Gradient = styled.div`
  width: 100%;
  height: 40em;
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0) 13.85%,
    rgba(191, 161, 127, 0.95) 58.89%
  );
  z-index: 1;
  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 5rem;
    line-height: 5rem;
    /* identical to box height */

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #432f1a;
    padding-top: 4rem;
  }
`;

export default Types;
