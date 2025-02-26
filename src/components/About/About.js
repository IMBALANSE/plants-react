import React from 'react';
import houseplantImage from '../../assets/images/houseplant.png';

const About = () => {
  return (
    <section className="about" id="about-us">
      <div className="about-wrapper flex-row">
        <div className="about-content flex-collum">
          <h2 className="about-header">We are <span className="about-highlight">professional <br /> experienced</span> gardeners</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <img className="about-img" src={houseplantImage} alt="houseplant" />
      </div>
    </section>
  )
}

export default About 