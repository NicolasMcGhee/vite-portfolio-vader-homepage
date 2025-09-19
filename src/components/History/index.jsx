import React from "react";
import "./index.css";
import Tatooine from '/Tatooine_TPM.png'


export default function History() {
  return (
    <div className="History_Container">
      {/* Title */}
      <div className="flex History_Title">
        <p>LIFE OF A JEDI</p>
        <p style={{marginInline: "auto"}}>BIRTH OF A SITH</p>
      </div>
      {/* Image and Text */}
      <div className="History_Info flex">
        <img src={Tatooine} alt="" />
        <div className="flex History_Text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere temporibus error earum, quos totam fuga perspiciatis quia? Deserunt nihil accusamus consequatur perspiciatis officiis modi voluptatem fuga delectus sit facilis est, placeat libero blanditiis quia ipsum autem porro velit in non beatae distinctio consectetur similique tempora itaque. Magnam, tempora ipsam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere temporibus error earum, quos totam fuga perspiciatis quia? Deserunt nihil accusamus consequatur perspiciatis officiis modi voluptatem fuga delectus sit facilis est, placeat libero blanditiis quia ipsum autem porro velit in non beatae distinctio consectetur similique tempora itaque. Magnam, tempora ipsam!</p>
        </div>
        
        <button>Click Here</button>
      </div>
    </div>
  );
}
