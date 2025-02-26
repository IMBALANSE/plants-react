import React from "react";
import instagramSvg from '../../assets/images/icons/instagram.svg'; 
import facebookSvg from '../../assets/images/icons/facebook.svg'; 
import twitterSvg from '../../assets/images/icons/twitter.svg'; 
import pinterestSvg from '../../assets/images/icons/pinterest.svg'; 

const Footer = () => {
  return (
    <div class="footer-wrapper">
      <div class="footer-content flex-row">
        <div class="footer-data flex-row">
          <p>©</p>
          <p>The best 2025</p>
          <a href="https://github.com/IMBALANSE"><p class="footer-link">github</p></a>
        </div>
        <div class="rss">
          <a href="https://rs.school/js-stage0/"><p class="footer-link">RAZIL VALUEV</p></a>
        </div>
        <ul class="social-list flex-row">
          <li><a href="https://instagram.com"><img class="social-list_item" src={instagramSvg} alt="instagram" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img class="social-list_item" src={facebookSvg}  alt="facebook" /></a></li>
          <li><a href="https://twitter.com"><img class="social-list_item" src={twitterSvg} alt="twitter" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img class="social-list_item" src={pinterestSvg} alt="pinterest" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer