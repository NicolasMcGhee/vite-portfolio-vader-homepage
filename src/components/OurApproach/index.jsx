import React from "react";
import "./index.css";
import Tatooine from "/Tatooine_TPM.png";

export default function OurApproach() {
  return (
    <div className="Bottom_Container">
      <div className="Bottom_LeftSide">
        <h3>TATOOINE</h3>
        <img src={Tatooine} alt="" />
        <ul>
          <li>
            <span>(01)</span> Lorem ipsum dolor sit amet.
          </li>
          <li>
            <span>(02)</span> Lorem ipsum dolor sit amet.
          </li>
          <li>
            <span>(03)</span> Lorem ipsum dolor sit amet.
          </li>
          <li>
            <span>(04)</span> Lorem ipsum dolor sit amet.
          </li>
          <li>
            <span>(05)</span> Lorem ipsum dolor sit amet.
          </li>
          <li>
            <span>(06)</span> Lorem ipsum dolor sit amet.
          </li>
        </ul>
      </div>
      <div className="Bottom_RightSide lato-bold">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, libero eveniet tempore architecto voluptatem magni numquam officiis nulla explicabo cum repellat deserunt accusamus possimus similique!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aperiam quam, quaerat illo minima quis voluptatibus eaque! Minus, natus vero.
        </p>
        <button>Building Vader</button>
      </div>
    </div>
  );
}
