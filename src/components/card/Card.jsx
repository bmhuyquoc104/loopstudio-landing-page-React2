import React from "react";
import { CardStyled } from "./Card.styled";
import { motion } from "framer-motion";
const Card = ({ bg, text, wd,bgPC }) => {
  console.log(wd);
  console.log(text);

  const textMotion = {
    rest: {
      color: "white",
    },
    hover: {
      color: "black",
    },
  };

  const cardMotion = {
    rest : {
      x:-100,
    },
    appear:{
      x: 0,
      transition: {
        type:"spring",
        duration:0.5,
        stiffness:100,
      }
    },
    hover: {
      opacity: 0.6,
    },
  }



  return (
    <motion.div whileHover="hover" animate="rest" whileInView ="appear"
    initial="rest"
    viewport={{ once: true }}

    >
      <CardStyled
        variants={cardMotion}
        bg={bg}
        bgPC ={bgPC}

      >
        <motion.h2
          variants={textMotion}
          wd={wd}
        >
          {text}
        </motion.h2>
      </CardStyled>
    </motion.div>
  );
};

export default Card;
