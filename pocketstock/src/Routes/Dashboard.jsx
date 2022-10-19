import React from "react";
import Threesteps from "../Components/3steps";
import OnApp from "../Components/onapp";
import Video from "../Components/Video";
import "../StyleSheets/Dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Video />
      <Threesteps />
      <OnApp />
    </div>
  );
};
export default DashBoard;
