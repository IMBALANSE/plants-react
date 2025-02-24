import React from "react";

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
          <li><a href="https://instagram.com"><img class="social-list_item" src="assets/svg/instagram.svg" alt="instagram" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img class="social-list_item" src="assets/svg/facebook.svg" alt="facebook" /></a></li>
          <li><a href="https://twitter.com"><img class="social-list_item" src="assets/svg/twitter.svg" alt="twitter" /></a></li>
          <li><a href="https://github.com/IMBALANSE"><img class="social-list_item" src="assets/svg/pinterest.svg" alt="pinterest" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer