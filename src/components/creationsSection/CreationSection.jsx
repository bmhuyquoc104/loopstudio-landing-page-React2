import React from "react";
import { CreationSectionStyled } from "./Creation.styled";
import imagesResource from "../../assets/images";
import Card from "../card/Card";
import { motion } from "framer-motion";
const CreationSection = () => {
  const cardContent = [
    {
      id: 1,
      bg: `${imagesResource.DeepEarthMB}`,
      bgPC: `${imagesResource.DeepEarthPC}`,

      text: "Deep Earth",
    },
    {
      id: 2,
      bg: `${imagesResource.NightArcadeMB}`,
      bgPC: `${imagesResource.NightArcadePC}`,
      text: "Night Arcade",
    },

    {
      id: 3,
      bg: `${imagesResource.SoccerTeamMB}`,
      bgPC: `${imagesResource.SoccerTeamPC}`,
      text: "Soccer Team Vr",
    },

    {
      id: 4,
      bg: `${imagesResource.GridMB}`,
      bgPC: `${imagesResource.GridPC}`,
      text: "The Grid",
      width: "30%",
    },

    {
      id: 5,
      bg: `${imagesResource.FromAboveMB}`,
      bgPC: `${imagesResource.FromAbovePC}`,
      text: "From Up Above VR",
    },

    {
      id: 6,
      bg: `${imagesResource.PocketBoreailMB}`,
      bgPC: `${imagesResource.PocketBoreailPC}`,
      text: "Pocket Borealis",
    },

    {
      id: 7,
      bg: `${imagesResource.CuriosityMB}`,
      bgPC: `${imagesResource.CuriosityPC}`,
      text: "The Curiosity",
    },

    {
      id: 8,
      bg: `${imagesResource.FishEyeMB}`,
      bgPC: `${imagesResource.FishEyePC}`,
      text: "Make It Fisheye",
    },
  ];

  const contentMotion = {
    appear: {
      opacity:1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    rest: {
      opacity:0,    },
  };

  return (
    <CreationSectionStyled>
      <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: {
            ease:"circIn", duration: 2 } }}
          viewport={{ once: true }}  className="title">
        <h2>Our Creations</h2>
      </motion.div>
      <motion.div
        variants={contentMotion}
        whileInView="appear"
        animate="appear"
        initial="rest"
        className="content"
        viewport={{ once: true }}

      >
        {cardContent.map((element) =>
          element.id === 4 ? (
            <Card
              bg={element.bg}
              bgPC={element.bgPC}
              wd={element.width}
              text={element.text}
              key={element.id}
            ></Card>
          ) : (
            <Card
              bg={element.bg}
              bgPC={element.bgPC}
              text={element.text}
              key={element.id}
              wd="45%"
            ></Card>
          )
        )}
      </motion.div>
      <div className="seeall-button">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { type:"circOut",duration: 2 } }}
          viewport={{ once: true }}

        >
          See All
        </motion.button>
      </div>
    </CreationSectionStyled>
  );
};

export default CreationSection;
