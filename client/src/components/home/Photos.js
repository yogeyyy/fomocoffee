import React from "react";
import styled from "styled-components";
import Photo from "./Photo";
import customerPhotos from "./photodata";

function createPhotoCard(photocard) {
  return <Photo key={photocard.id} src={photocard.src} alt={photocard.alt} />;
}

function Photos() {
  return (
    <Container>
      <InnerContainer>
        <h1>Photos</h1>
        <PhotosRow>{customerPhotos.map(createPhotoCard)}</PhotosRow>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  min-height: 100%;
  background-color: #7f5837;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  max-width: 76%;
  min-height: 100%;
  margin: auto;
  text-align: center;
  padding-bottom: 4rem;

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 7rem;
    line-height: 8rem;

    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding-top: 2.625rem;
    margin-bottom: 2rem;

    color: #432f1a;
  }
`;

const PhotosRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default Photos;
