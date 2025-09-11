import React from "react";
import "./index.css";


export default function Card(props) {
  return (
    <div className="Card_Container">
      <img src={props.profilePic} alt="" />
      <h2>{props.title}</h2>
      <div className="Card_Text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus
          doloremque in modi. Excepturi eveniet minus, fugit accusantium quaerat
          asperiores at vel autem voluptas, fuga alias omnis? Consequuntur, esse
          eveniet impedit hic sequi necessitatibus voluptatum odit ea
          distinctio. Officiis fugit laboriosam, nostrum minima consequatur quis
          eum quasi amet aut fuga?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          incidunt eos rerum minus, tempore soluta nostrum veritatis quod
          consectetur ab impedit? Eveniet laboriosam pariatur debitis.
        </p>
      </div>
    </div>
  );
}
