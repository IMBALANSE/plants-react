import React from "react";

const About = () => {
  return (
    <section class="about" id="about-us">
      <div class="about-wrapper flex-row">
        <div class="about-content flex-collum">
          <h2 class="about-header">We are <span class="about-highlight">professional <br /> experienced</span> gardeners</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <img class="about-img" src="assets/img/houseplant.png" alt="houseplant" />
      </div>
    </section>
  )
}

export default About 