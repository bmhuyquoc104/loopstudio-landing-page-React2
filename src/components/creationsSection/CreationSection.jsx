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
      bgpc: `${imagesResource.DeepEarthPC}`,

      text: "Deep Earth",
    },
    {
      id: 2,
      bg: `${imagesResource.NightArcadeMB}`,
      bgpc: `${imagesResource.NightArcadePC}`,
      text: "Night Arcade",
    },

    {
      id: 3,
      bg: `${imagesResource.SoccerTeamMB}`,
      bgpc: `${imagesResource.SoccerTeamPC}`,
      text: "Soccer Team Vr",
    },

    {
      id: 4,
      bg: `${imagesResource.GridMB}`,
      bgpc: `${imagesResource.GridPC}`,
      text: "The Grid",
      width: "30%",
    },

    {
      id: 5,
      bg: `${imagesResource.FromAboveMB}`,
      bgpc: `${imagesResource.FromAbovePC}`,
      text: "From Up Above VR",
    },

    {
      id: 6,
      bg: `${imagesResource.PocketBoreailMB}`,
      bgpc: `${imagesResource.PocketBoreailPC}`,
      text: "Pocket Borealis",
    },

    {
      id: 7,
      bg: `${imagesResource.CuriosityMB}`,
      bgpc: `${imagesResource.CuriosityPC}`,
      text: "The Curiosity",
    },

    {
      id: 8,
      bg: `${imagesResource.FishEyeMB}`,
      bgpc: `${imagesResource.FishEyePC}`,
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
              bgpc={element.bgpc}
              wd={element.width}
              text={element.text}
              key={element.id}
            ></Card>
          ) : (
            <Card
              bg={element.bg}
              bgpc={element.bgpc}
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
