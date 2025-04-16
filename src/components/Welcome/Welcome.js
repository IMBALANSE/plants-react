import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import leafsImage from '../../assets/images/leafs.png';
import styles from './Welcome.module.scss'; 


const Welcome = () => {
  const navigate = useNavigate(); 

  const handleLearnMoreClick = () => {
    navigate('/oxygen');
  };

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome__wrapper}>
        <img className={styles.welcome__image} src={leafsImage} alt="leafs" />
        <div className={styles.welcome__content}>
          <h1>We grow <span className={styles.welcome__highlight} >plants</span> and give you oxygen</h1>
          <p className={styles.welcome__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="button" onClick={handleLearnMoreClick}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
