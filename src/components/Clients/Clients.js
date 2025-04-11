import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import ClientsImage from '../../assets/images/Clients.png';
import styles from './Clients.module.scss'; 

const Clients = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleWatchClick = () => {
    navigate('/Clients'); // Переход на страницу /learn-more
  };
  return (
    <section className={styles.clients}  id="clients-us">
      <div className={styles.clients__wrapper}>
        <div className={styles.clients__content} >
          <h2 className={styles.clients__title} >Our <span className={styles.clients__highlight} >clients </span>  who have used<br /> services</h2>
          <p className={styles.clients__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button className="button" onClick={handleWatchClick}>WATCH</button>
        </div>
        <img className={styles.clients__img} src={ClientsImage} alt="ClientsImage" />
      </div>
    </section>
  )
}

export default Clients