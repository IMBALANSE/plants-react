import React from "react";
import instagramSvg from '../../assets/images/icons/instagram.svg'; 
import facebookSvg from '../../assets/images/icons/facebook.svg'; 
import twitterSvg from '../../assets/images/icons/twitter.svg'; 
import pinterestSvg from '../../assets/images/icons/pinterest.svg'; 
import './Footer.css';

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__wrapper flex__row">
        <div class="footer__content flex__row">
          <p>©</p>
          <p>2025</p>
          <a href="https://github.com/IMBALANSE"><p class="footer__link">github</p></a>
        </div>
        <div class="cv">
          <a href="https://imbalanse.github.io/rsschool-cv/"><p class="footer__link">RAZIL VALUEV</p></a>
        </div>
        <ul class="footer__social-list flex__row">
          <li><a href="https://instagram.com"><img class="footer__social-link" src={instagramSvg} alt="instagram" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img class="footer__social-link" src={facebookSvg}  alt="facebook" /></a></li>
          <li><a href="https://twitter.com"><img class="footer__social-link" src={twitterSvg} alt="twitter" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img class="footer__social-link" src={pinterestSvg} alt="pinterest" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
