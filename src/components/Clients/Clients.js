import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import ClientsImage from '../../assets/images/Clients.png';
import './Clients.css';

const Clients = () => {
  const navigate = useNavigate(); // Используйте useNavigate для навигации

  const handleLearnMoreClick = () => {
    navigate('/learn-more'); // Переход на страницу /learn-more
  };
  return (
    <section className="clients" id="clients-us">
      <div className="clients-wrapper flex-row">
        <div className="clients-content flex-collum">
          <h2 className="clients-header">Our <span className="clients-highlight">clients </span>  who have used<br /> services</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button className="button" onClick={handleLearnMoreClick}>WATCH</button>
        </div>
        <img className="clients-img" src={ClientsImage} alt="ClientsImage" />
      </div>
    </section>
  )
}

export default Clients