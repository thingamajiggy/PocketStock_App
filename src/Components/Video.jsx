import React from "react";
import "../StyleSheets/VidStyles.css";
import Nut from "../Assets/nutandbolt.png";
const Video = () => {
  return (
    <div className="hero">
      <div className="content">
        <div id="herotext">
          <h1> Pocket Stock</h1>
          <p className="sentenceline">
            An automated solution to dynamic stock management for{" "}
            <span id="your">
              <strong>
                <em>your</em>
              </strong>
            </span>{" "}
            E-commerce business.
          </p>
        </div>
        <img alt="" src={Nut} className="nut" />
      </div>
    </div>
  );
};

export default Video;
