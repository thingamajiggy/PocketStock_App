import React from "react";
import "../StyleSheets/onapp.css";
import Phone from "../Assets/psphone.png";

const OnApp = () => {
  return (
    <section className="onapp">
      <section className="mobile">
        <section className="mobiledescription">
          <h3>Pocket Stock works better with the app.</h3>
          <p id="download">Download now on the App store.</p>
          <button id="downloadbutton">
            <p className="downloadbutton">Download</p>
          </button>
        </section>
        <div className="phone-container">
          <img alt="" src={Phone} id="phone" />
        </div>
      </section>
    </section>
  );
};

export default OnApp;
