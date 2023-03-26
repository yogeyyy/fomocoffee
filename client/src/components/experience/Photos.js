import React from "react";
import "./photos.css";
import Photo from "./Photo";
import customerPhotos from './photodata'

function createPhotoCard(photocard) {
  return <Photo key={photocard.id} src={photocard.src} alt={photocard.alt} />;
}

function Photos() {
  return (
    <div className="photos">
      <div className="photosArea">
        <h1 className="photosHeading">Photos</h1>
        <div className="photosRow">{customerPhotos.map(createPhotoCard)}</div>
      </div>
    </div>
  );
}

export default Photos;
