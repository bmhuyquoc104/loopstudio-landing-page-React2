import React from "react";
import {FooterStyled} from "./Footer.styled";
import imagesResource from "../../assets/images";
import {motion} from 'framer-motion'
const Footer = () => {
  const listMotion = {
    hover:{
      cursor: 'pointer',
      borderBottom: '1px solid white',
      scale:1.2
    }
  }
  return (
    <FooterStyled>
      <div className="image">
        <img src={imagesResource.Logo} alt="website logo" />
      </div>
      <ul>
        <motion.li variants = {listMotion} whileHover = "hover" >About</motion.li>
        <motion.li variants = {listMotion} whileHover = "hover" >Carrers</motion.li>
        <motion.li variants = {listMotion} whileHover = "hover" >Events</motion.li>
        <motion.li variants = {listMotion} whileHover = "hover" >Products</motion.li>
        <motion.li variants = {listMotion} whileHover = "hover" >Support</motion.li>
      </ul>

      <div className="social-connect">
        <motion.div  variants = {listMotion} whileHover = "hover" className="fb-image">
          <img src={imagesResource.FacebookIcon} alt="facebook icon" />
        </motion.div>
        <motion.div variants = {listMotion} whileHover = "hover" className="tt-image">
          <img src={imagesResource.TwitterIcon} alt="twitter icon" />
        </motion.div>
        <motion.div variants = {listMotion} whileHover = "hover" className="pt-image">
          <img src={imagesResource.PinterestIcon} alt="pinterest icon" />
        </motion.div>
        <motion.div variants = {listMotion} whileHover = "hover" className="ins-image">
          <img src={imagesResource.InstagramIcon} alt="instagram icon" />
        </motion.div>
      </div>
      
      <div className="copyright">© 2021 Loopstudios. All rights reserved.
      </div>
    </FooterStyled>
  );
};

export default Footer;
