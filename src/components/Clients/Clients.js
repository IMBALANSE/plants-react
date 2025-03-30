import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import ClientsImage from '../../assets/images/Clients.png';
import './Clients.scss';

const Clients = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleWatchClick = () => {
    navigate('/Clients'); // Переход на страницу /learn-more
  };
  return (
    <section className="clients" id="clients-us">
      <div className="clients__wrapper flex__row">
        <div className="clients__content flex__column">
          <h2 className="clients__header">Our <span >clients </span>  who have used<br /> services</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button className="button" onClick={handleWatchClick}>WATCH</button>
        </div>
        <img className="clients__img" src={ClientsImage} alt="ClientsImage" />
      </div>
    </section>
  )
}

export default Clients