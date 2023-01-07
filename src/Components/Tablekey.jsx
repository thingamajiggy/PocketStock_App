import React, { useState } from "react";
import "../StyleSheets/key.css";
import { BsInfoSquare, BsFillSquareFill } from "react-icons/bs";
import { Popover } from "react-tiny-popover";

const Key = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "left", "right"]} // preferred positions by priority
      content={
        <div className="info">
          <div className="infocontent">
            <h3>How to use:</h3>
            <p>
              To effectively implement the Just-In-Time model, it is essential
              that you have planned and accounted for the lead time associated
              with your components. Enter a trigger point that accounts for the
              lead time of each component, but doesn't put you at risk of
              running out of stock.{" "}
            </p>
            <h3>Key:</h3>
            <p>
              {" "}
              <BsFillSquareFill id="yellow" /> Your stock level has fallen below
              your trigger point, order stock now.{" "}
            </p>
            <p>
              {" "}
              <BsFillSquareFill id="red" /> Your stock level has fallen below 0.
              You do not have enough stock to fulfil the orders already placed.
            </p>
          </div>
        </div>
      }
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        {" "}
        <h2 id="useful">
          <BsInfoSquare id="infoicon" />
          Useful Information:
        </h2>
      </div>
    </Popover>
  );
};

export default Key;
