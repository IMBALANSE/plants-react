import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import leafsImage from '../../assets/images/leafs.png';
// import './Consultation.scss';
import styles from './Consultation.module.scss'; 

const Consultation = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleConsultationClick = () => {
    navigate('/consultation'); // Переход на страницу /learn-more
  };

  return (
    <section className={`${styles.consultation} consultation flex__row` }>
      <div className={`${styles.consultation__wrapper} flex__row` }>
        <img className= {`${styles.consultation__image} ` } src={leafsImage} alt="leafs" />
        <div className={`${styles.consultation__content} flex__column` }>
          <h2>We can advise <span > answer your questions</span> and help start</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="button" onClick={handleConsultationClick}>CONSULTATION</button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;