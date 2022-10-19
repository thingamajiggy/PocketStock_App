import React from "react";
import "../StyleSheets/threesteps.css";
import Cog from "../Assets/component.png";
import Order from "../Assets/order.png";
import Product from "../Assets/product.png";

const Threesteps = () => {
  return (
    <div className="threesteps">
      <div className="threestepscontent">
        <section className="section1container">
        <section className="section1">
          <img src={Cog} className="icon1" alt="cog icon" />
          <section className="section1text">
            <h3>Step 1: Add Your Components</h3>
            <p>
              <em>Complete your stock take, enter your stock level and enter your
              trigger point.</em>
            </p>
          </section>
        </section>
        </section>
        <section className="section2container">
        <section className="section2">
          <section className="section2text">
            <h3>Step 2: Add Your Products </h3>
            <p><em>Enter your products and assign your components.</em></p>
          </section>
          <img src={Product} className="icon2" alt="robot arm icon" />
        </section>
        </section>
        <section className="section3container">
        <section className="section3">
          <img src={Order} className="icon3" alt="computer icon" />
          <section className="section3text">
            <h3>Step 3: Connect Your Shops</h3>
            <p> <em>
              Link your E-commerce businesses and let Pocket Stock track your
              inventory based on products sold. </em>
              <strong> The ultimate pull system. </strong>
            </p>
          </section>
        </section>
        </section>
      </div>
    </div>
  );
};

export default Threesteps;
