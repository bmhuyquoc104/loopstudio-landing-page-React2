import React, { useState } from "react";
import { HeaderStyled, ActiveNavStyled } from "./Header.styled";
import imagesResource from "../../assets/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isToggle, setToggle] = useState(true);
  let isPC = useMediaQuery("(min-width: 800px)");

  const listMotion = {
    hover: {
      cursor: "pointer",
      borderBottom: "1px solid white",
      scale:1.2

    },
  };
  return (
    <>
      {isPC ? (
        <HeaderStyled>
          <div className="banner">
            <div className="image">
              <img src={imagesResource.Logo} alt="A logo of website" />
            </div>
            <ul>
              <motion.li whileHover="hover" variants={listMotion}>
                About
              </motion.li>
              <motion.li whileHover="hover" variants={listMotion}>
                Carrers
              </motion.li>
              <motion.li whileHover="hover" variants={listMotion}>
                Events
              </motion.li>
              <motion.li whileHover="hover" variants={listMotion}>
                Product
              </motion.li>
              <motion.li whileHover="hover" variants={listMotion}>
                Support
              </motion.li>
            </ul>
          </div>
          <div className="title-container">
            <h1>Immersive experiences that deliver</h1>
          </div>
        </HeaderStyled>
      ) : (
        <AnimatePresence initial={false} exitBeforeEnter>
          {isToggle ? (
            <motion.div
              key="modal"
              animate={{
                x: 0,
                transition: {
                  type: "tween",
                  duration: 0.2,
                },
              }}
              initial={{
                x: "100vw",
              }}
            >
              <HeaderStyled>
                <div className="banner">
                  <div className="image">
                    <img src={imagesResource.Logo} alt="A logo of website" />
                  </div>
                  <motion.div
                    animate={{
                      rotateY: 180,
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: Infinity,
                        ease: "linear",
                      },
                    }}
                    onClick={() => {
                      setToggle(!isToggle);
                    }}
                    className="nav"
                  >
                    <img
                      src={imagesResource.HamburgerIcon}
                      alt="A navbar show button"
                    />
                  </motion.div>
                </div>
                <div className="title-container">
                  <h1>Immersive experiences that deliver</h1>
                </div>
              </HeaderStyled>
            </motion.div>
          ) : (
            <motion.div
              key="modal2"
              animate={{
                x: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 0.3,
                },
              }}
              initial={{
                x: "-100vw",
              }}
            >
              <ActiveNavStyled>
                <div className="banner">
                  <div className="image">
                    <img src={imagesResource.Logo} alt="A logo of website" />
                  </div>

                  <div className="nav">
                    <img
                      onClick={() => {
                        setToggle(!isToggle);
                      }}
                      src={imagesResource.CloseIcon}
                      alt="A navbar show button"
                    />
                  </div>
                </div>
                <ul>
                  <motion.li whileHover="hover" variants={listMotion}>
                    ABOUT
                  </motion.li>
                  <motion.li whileHover="hover" variants={listMotion}>
                    CARRERS
                  </motion.li>
                  <motion.li whileHover="hover" variants={listMotion}>
                    EVENTS
                  </motion.li>
                  <motion.li whileHover="hover" variants={listMotion}>
                    PRODUCT
                  </motion.li>
                  <motion.li whileHover="hover" variants={listMotion}>
                    SUPPORT
                  </motion.li>
                </ul>
              </ActiveNavStyled>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;
