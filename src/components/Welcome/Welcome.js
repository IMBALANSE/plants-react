import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import leafsImage from '../../assets/images/leafs.png';

const Welcome = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleLearnMoreClick = () => {
    navigate('/oxygen'); // Переход на страницу /learn-more
  };

  return (
    <section className="welcome">
      <div className="welcome-wrapper flex-row">
        <img className="welcome-image" src={leafsImage} alt="leafs" />
        <div className="content flex-collum">
          <h1>We grow <span className="green-highlight">plants</span> and give you oxygen</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="button" onClick={handleLearnMoreClick}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;