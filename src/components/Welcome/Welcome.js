import React from 'react';
import leafsImage from '../../assets/images/leafs.png';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-wrapper flex-row">
        <img className="welcome-image" src={leafsImage} alt="leafs" />
        <div className="content flex-collum">
          <h1>We grow <span className="green-highlight">plants</span> and give you oxygen</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="welcome-button">LEARN MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Welcome 