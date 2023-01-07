import React from "react";
import "../StyleSheets/threesteps.css";
import Boxes from "../Assets/cardboardbox.png";
import Lego from "../Assets/lego.png";
import Computer from "../Assets/computer.png";

const Threesteps = () => {
  return (
    <div className="threesteps">
      <div className="threestepscontent">
        <section className="section1container">
          <section className="section1">
            <img src={Lego} className="icon1" alt="cog icon" />
            <section className="section1text">
              <h3>First, add Your Components.</h3>
              <p className="lineheight">
                Complete your stock take, enter your stock level and enter your
                trigger point.
              </p>
            </section>
          </section>
        </section>
        <section className="section2container">
          <section className="section2">
            <section className="section2text">
              <h3>Then, add Your Products. </h3>
              <p className="lineheight">
                Enter your products and assign your components.
              </p>
            </section>
            <img src={Boxes} className="icon2" alt="robot arm icon" />
          </section>
        </section>
        <section className="section3container">
          <section className="section3">
            <img src={Computer} className="icon3" alt="computer icon" />
            <section className="section3text">
              <h3> Lastly, connect Your Stores.</h3>
              <p className="lineheight"> Stock management made simple.</p>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Threesteps;
