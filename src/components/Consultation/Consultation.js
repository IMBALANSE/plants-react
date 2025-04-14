import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import leafsImage from '../../assets/images/leafs.png';
import styles from './Consultation.module.scss'; 

const Consultation = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleConsultationClick = () => {
    navigate('/consultation'); // Переход на страницу /learn-more
  };

  return (
    <section className={styles.consultation}>
      <div className={styles.consultation__wrapper}>
        <img className={styles.consultation__image} src={leafsImage} alt="leafs" />
        <div className={styles.consultation__content}>
          <h2 className={styles.consultation__title}>We can advise <span className={styles.consultation__highlight}> answer your questions</span> and help start</h2>
          <p className={styles.consultation__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="button" onClick={handleConsultationClick}>CONSULTATION</button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;