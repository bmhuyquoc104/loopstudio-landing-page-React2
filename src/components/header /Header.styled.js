import styled from "styled-components";
import imagesResource from "../../assets/images";
import { motion } from "framer-motion";
export const HeaderStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 1.5em;
  background-image: url(${imagesResource.HeroMB});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 110vh;

  .banner {
    position: absolute;
    top: 3em;
    left: 1.5em;
    display: flex;
    right: 1.5em;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 80%;
  }

  .nav img {
    width: 120%;
  }
  .title-container {
    width: max(100%, 300px);
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 4.2rem);
    color: var(--clr_w_primary);
    padding: 0.5em 0.75em;
    border: 2px solid var(--clr_w_primary);
    line-height: 1.2;
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    background-color: transparent;
    background-image: url(${imagesResource.HeroPC});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 80vh;
    position:initial;
    padding: 0 8em;
    flex-direction:row;
    justify-content:initial;
    align-items:initial;
    flex-wrap: wrap;

  &>*{
    width:100%;
  }

    .banner {
    position: initial;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
  }

  .title-container{
    width: 60%;
  }
    ul {
    display: flex;
    flex-direction: row;
    gap:2em;
  }

  li {
    list-style-type: none;
    color: var(--clr_w_primary);
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    font-family: "Josefin Sans", sans-serif;
    width: fit-content;
  }
  }
`;

export const ActiveNavStyled = styled(motion.nav)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  background-color: var(--clr_b_primary);
  min-height: 110vh;
  gap: 17em;

  .banner {
    position: absolute;
    top: 3em;
    left: 1.5em;
    display: flex;
    right: 1.5em;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 80%;
  }

  .nav img {
    width: 120%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  li {
    list-style-type: none;
    color: var(--clr_w_primary);
    font-size: clamp(1.5rem, 2vw, 1.7rem);
    font-family: "Josefin Sans", sans-serif;
    width: fit-content;
  }

  
`;
