import React, { useRef, useState } from "react";
import "./index.css";
import Jedi from "/Episode 1/Episode_I_Phantom_Menace_Cast.jpg";
import Anakin from "/Episode 1/Young_Anakin.webp";
import {
  motion,
  AnimatePresence,
  useInView,
  easeIn,
  color,
} from "motion/react";
import { p } from "motion/react-client";
import TextFadeIn from "../TextFadeIn";

export default function Showcase() {
  const [isVisible, setIsVisible] = useState(false);
  const animate = {
    transition: { type: "tween" },
    height: isVisible ? "auto" : 0,
    //opacity: open ? 1 : .5
  };
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="Showcase_Container"
      ref={ref}
      style={{
        // opacity: IsInView ? "1" : "0",
        height: IsInView ? "0%" : "0%",
        transition: "1s height",
      }}
    >
      <div className="Showcase_Image">
        <img src={Jedi} alt="" />
      </div>
      <motion.div className="Showcase_Info">
        <img src={Anakin} alt="" />
        <AnimatePresence mode="wait">
          {IsInView && (
            
            <TextFadeIn
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium perspiciatis nam nostrum repellendus laboriosam amet recusandae at, numquam distinctio unde reiciendis asperiores commodi necessitatibus."
              text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas facere quisquam corporis ducimus veritatis."
              
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
