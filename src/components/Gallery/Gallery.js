import { React, useEffect } from "react";
import "./Gallery.css";
import Imagegrid from "./Imagegrid";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery - PEARL";
  }, []);

  return (
    <div className="background-gallery">
      <div className="image-gallery"></div>
      <div className="content-gallery">
        <h1 className="gallery-title">GALLERY</h1>
      </div>
      <Imagegrid />
    </div>
  );
};

export default Gallery;
