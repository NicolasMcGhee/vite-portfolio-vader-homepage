import React from "react";
import "./index.css";
import Tatooine from "/Tatooine_TPM.png";
import { div } from "motion/react-client";

export default function FocusedOn() {
  return (
    <div className="Focused_Container">
      <div className="Focused_BothSides">
        <div className="Focused_LeftSide">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, ad?
          </h3>
          <img src={Tatooine} alt="" />
          <div className="Focused_Text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, neque eligendi consequatur ipsam praesentium magnam
              laudantium est tenetur debitis laborum dolor culpa voluptatum
              porro vitae rerum? Aperiam sit omnis mollitia molestias tempora
              repudiandae quas blanditiis ipsum, explicabo doloribus temporibus,
              laborum voluptatibus ducimus sint nihil voluptas esse, nam atque
              tenetur dolorum?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              pariatur minus a architecto quibusdam voluptate porro, eius cumque
              molestiae tempora. Quasi earum doloribus distinctio quis?
            </p>
          </div>
          <div>
            <h4>Title 2</h4>
            <h4>Title 4</h4>
          </div>
        </div>
        <div className="Focused_RightSide">
          <img src={Tatooine} alt="" />
          <p></p>
        </div>
      </div>
      <div className="Focused_Bottom">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h1 style={{textAlign:"right"}}>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  );
}
