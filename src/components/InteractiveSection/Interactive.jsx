import React from "react";
import { InteractiveSectionStyled } from "./Interactive.styled";
import imagesResource from '../../assets/images'
const InteractiveSection = () => {
  return (
    <InteractiveSectionStyled>
      <div className="image">
        <img
          src={imagesResource.InteractionMB}
          alt="A man playing virtual game"
        />
      </div>
      <div className="content">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </InteractiveSectionStyled>
  );
};

export default InteractiveSection;
