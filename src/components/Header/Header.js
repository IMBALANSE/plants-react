import React from 'react';

const Header = () => {
  return (
    <header class="header" id="home">
      <div class="header-wrapper flex-row">
        <div class="logo flex-row">
          <a class="logo-link" href="#">
            <img src="assets/svg/logo_plant.svg" alt="logo-plant" />Plants
          </a> {/**<!-- внутри ссылки svg логотип и текст рядом --> */}
        </div>
        <div class="navbar-burger-item" id="navbar-burger-item"> {/** <!-- бургер меню, скорей всего скрыто, пока размер не уменьшится и не скроет блок навигации ниже -->*/}
          <a class="navbar-burger-icon flex-column" href="javascript:void(0);" id="navbar-burger-icon">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </a>
        </div>
        <nav class="header__nav" id="navbar"> {/**<!-- блок навигации --> */}
          <ul class="navigation flex-row">
            <li class="nav__item"><a href="#home">Home</a></li>
            <li class="nav__item"><a href="#about-us">About us</a></li>
            <li class="nav__item"><a href="#service">Service</a></li>
            <li class="nav__item"><a href="#price">Price</a></li>
            <li class="nav__item"><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header