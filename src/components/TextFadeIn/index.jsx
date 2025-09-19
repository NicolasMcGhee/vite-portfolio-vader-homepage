import React from "react";
import { motion } from "motion/react";
import './index.css'

export default function TextFadeIn(props) {
  return (
    <motion.div
    className="Text_Container"
    //   style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 3, ease: "anticipate" }}
      // animate={animate}
    >
      <motion.p style={{ fontSize: "1.5rem" }}>
        {props.text}
      </motion.p>
      <motion.p style={{ fontSize: "1.5rem" }}>
        {props.text2}
      </motion.p>
    </motion.div>
  );
}
