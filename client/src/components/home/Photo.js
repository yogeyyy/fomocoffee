import React from "react";
import styled from "styled-components";

function Photo(props) {
  return (
    <Polaroid>
      <PolaroidFrame>
        <img src={props.src} alt={props.alt} />
      </PolaroidFrame>
    </Polaroid>
  );
}

const Polaroid = styled.div`
  width: 25%;
  min-height: 20rem;
  background-color: white;
  padding: 1.2rem;
`;

const PolaroidFrame = styled.div`
  min-height: 86%;
  img {
    max-width: 100%;
  }
`;

export default Photo;
