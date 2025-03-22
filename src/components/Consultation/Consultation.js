import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import leafsImage from '../../assets/images/leafs.png';
import './Consultation.css';

const Consultation = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleLearnMoreClick = () => {
    navigate('/consultation'); // Переход на страницу /learn-more
  };

  return (
    <section className="consultation ">
      <div className="consultation__wrapper flex__row">
        <img className="consultation__image" src={leafsImage} alt="leafs" />
        <div className="consultation__content flex__column">
          <h1>We can advise <span className="green-highlight"> answer your questions</span> and help start</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="button" onClick={handleLearnMoreClick}>CONSULTATION</button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;