
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для возможности перехода по страницам 
import logo from '../../assets/images/icons/logo_plant.svg'; 
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay'
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  /* 1 При изменении состояния isOpen (т.е. При нажатии на блок с полосками header__burger-icon) изменится условие, устанавливающее комбинацию классов .header.open в хедере, которые в свою очередь: 1) управляют стилями палочек бургер меню navbar-burger-icon 2) позиционируют блок с навигацией header__nav, пока не нажали на палочки он всегда скрыт справа за viewport, при смене состояния isOpen через анимацию сдвигается на на свою ширину влево (через transform: translateX(-100%) )
  2) при разрешении до 768 px элементы навигации header__nav-item (Home, about ...) становятся блочными display: block; и выстраиваются в каждую строчку 
  Сам класс хедер используется в глобальных стилях подкрашивается фон */

  return ( 
    <header className={`header ${isOpen ? "open" : ""}`}  id="home">
      <DateTimeDisplay />
      <div className="header__wrapper flex__row">
        <div className="flex__row">
          <a className="" href="/">
            <img src={logo} alt="logo-plant" />Plants
          </a> {/**<!-- внутри ссылки svg логотип и текст рядом --> */}
        </div>
        <div onClick={toggleMenu} className="header__burger-icon" id="navbar-burger-item"> 
          <button className="burger-icon flex__column" id="navbar-burger-icon">
            <span className="burger-icon__line"></span>
            <span className="burger-icon__line"></span>
            <span className="burger-icon__line"></span>
            <span className="burger-icon__line"></span>
          </button>
        </div>
        <nav className="header__nav" id="navbar"> {/**<!-- блок навигации --> */}
          <ul className="header__nav-list flex__row"> 
            <li className="header__nav-item"><Link to="/">Home</Link></li>{/*Если в хедере ссылки на другие страницы, то для перехода по страницам, посмотри файл "Другие страницы" */}
            <li className="header__nav-item"><a href="#about-us">About us</a></li> 
            <li className="header__nav-item"><a href="#service">Service</a></li>
            <li className="header__nav-item"><a href="#price">Price</a></li>
            <li className="header__nav-item"><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 

export default Header
/* Компонент начинается с import React from 'react'; 
Затем импортируем картинки которые хотим видеть внутри комп-та
Затем стили
с объявления константы именем будущего компонента, где используем стрелочную функцию, где в теле функции используем return и одну скобку, затем пишем весь код html который будет означаать этот компонент

import React, { useState } from 'react'; хук useState импортируется из самого react 
import { Link } from 'react-router-dom'; // Импортируем Link для возможности перехода по страницам 

*/

/* UseState управляет состоянием,   const [isOpen, setIsOpen] = useState(false); Здесь isOpen имеет начальное состояние false. A setIsOpen это функция  которая меняет это состояние, в данном случае на противоположное 

*/


// тут с помощью JS и стилей трансформации transform: rotate(-45deg); и transition: 0.3s; в .navbar-burger-icon .burger-icon__line  реализована анимация отжатия кнопки

