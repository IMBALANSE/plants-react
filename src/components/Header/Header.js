
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для возможности перехода по страницам 
import logo from '../../assets/images/icons/logo_plant.svg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <header className={`header ${isOpen ? "open" : ""}`}  id="home">,
      <div className="header-wrapper flex-row">
        <div className="logo flex-row">
          <a className="logo-link" href="/">
            <img src={logo} alt="logo-plant" />Plants
          </a> {/**<!-- внутри ссылки svg логотип и текст рядом --> */}
        </div>
        <div onClick={toggleMenu} className="navbar-burger-item" id="navbar-burger-item"> {/** <!-- бургер меню, скорей всего скрыто, пока размер не уменьшится и не скроет блок навигации ниже -->*/}
          <button className="navbar-burger-icon flex-column" id="navbar-burger-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
        <nav className="header__nav" id="navbar"> {/**<!-- блок навигации --> */}
          <ul className="navigation flex-row">
            <li className="nav__item"><Link to="/">Home</Link></li>
            <li className="nav__item"><a href="#about-us">About us</a></li> {/*Если в хедере ссылки на другие страницы, то для перехода по страницам, посмотри файл "Другие страницы" */}
            <li className="nav__item"><a href="#service">Service</a></li>
            <li className="nav__item"><a href="#price">Price</a></li>
            <li className="nav__item"><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 

export default Header