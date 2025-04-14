import React from "react";
import instagramSvg from '../../assets/images/icons/instagram.svg'; 
import facebookSvg from '../../assets/images/icons/facebook.svg'; 
import twitterSvg from '../../assets/images/icons/twitter.svg'; 
import pinterestSvg from '../../assets/images/icons/pinterest.svg'; 
import styles from './Footer.module.scss'; 

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper} >
        <div className={styles.footer__content} >
          <p className={styles.footer__paragraph}>©</p>
          <p className={styles.footer__paragraph}>2025</p>
          <a href="https://github.com/IMBALANSE"><p className={styles.footer__link}>github</p></a>
        </div>
        <div>
          <a href="https://imbalanse.github.io/rsschool-cv/"><p className={styles.footer__link}>RAZIL VALUEV</p></a>
        </div>
        <ul className={styles.footer__list_social} >
          <li><a href="https://instagram.com"><img className={styles.footer__link_social} src={instagramSvg} alt="instagram" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img className={styles.footer__link_social} src={facebookSvg}  alt="facebook" /></a></li>
          <li><a href="https://twitter.com"><img className={styles.footer__link_social} src={twitterSvg} alt="twitter" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img className={styles.footer__link_social} src={pinterestSvg} alt="pinterest" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
