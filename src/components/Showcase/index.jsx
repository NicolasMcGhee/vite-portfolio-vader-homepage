import React, { useRef, useState } from "react";
import "./index.css";
import Jedi from "/Episode 1/Episode_I_Phantom_Menace_Cast.jpg";
import Anakin from "/Episode 1/Young_Anakin.webp";
import { motion, AnimatePresence, useInView, easeIn, color } from "motion/react";

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
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 10 }}
              // animate={animate}
            >
              <motion.p 
              style={{ fontSize: "1.5rem" }}
              // transition={{
              //   duration: 10,
              //   ease: "easeInOut"
              // }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                optio facere quo repellat quibusdam illum, totam repudiandae
                distinctio, necessitatibus quae dolorem nesciunt omnis quasi
                explicabo tempora quia in. Corrupti nulla vitae blanditiis
                beatae modi quae praesentium quod dolorum. Totam vero
                exercitationem nulla aliquam, porro sapiente! Nisi delectus
                natus distinctio debitis expedita maxime, temporibus nesciunt
                quisquam iste dolorum omnis eos provident. Soluta facilis
                expedita nam ipsum iusto, hic deleniti maxime ea odit magnam!
                Eaque quia itaque nihil nobis enim corporis tenetur numquam,
                repellendus sapiente aperiam, ex perspiciatis facilis impedit
                reiciendis suscipit atque eum temporibus non dolor facere
                corrupti unde? Reprehenderit delectus sapiente, enim at
                consectetur suscipit porro nisi eligendi amet cumque quasi quos
                adipisci temporibus, nam laboriosam molestias fugit eius
                repellendus, illo hic odio dolor accusantium corrupti modi? Est
                perferendis accusantium maxime reiciendis. Consequuntur optio
                obcaecati et dicta nulla officia nihil eligendi nostrum porro
                cumque dolorem, cupiditate aspernatur corrupti delectus! Quasi
                ad dolorum earum, exercitationem inventore similique pariatur
                voluptatibus nobis quam? Distinctio iure, sint, reiciendis quo,
                fugiat nobis nulla odio incidunt nemo cupiditate similique natus
                fuga maxime illum laboriosam tempora numquam deserunt
                dignissimos molestiae eum repellat molestias quod vitae cum!
                Alias quam necessitatibus ullam repellendus corporis amet quia
                provident architecto libero.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
