import React from "react";
import '../StyleSheets/VidStyles.css'
const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source type="video/mp4" />
      </video>
      <div className="content">
      <h1> Pocket Stock</h1>
      <p> Your semi-automated solution to dynamic stock management. </p>

      </div>
    </div>
  );
};

export default Video;