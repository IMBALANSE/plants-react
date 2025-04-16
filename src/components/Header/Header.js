
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/images/icons/logo_plant.svg'; 
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay'
import styles from './Header.module.scss'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const openClass = isOpen ? styles.open : "";

  return ( 
    <header className={`${styles.header} ${openClass}`}  id="home">
      <DateTimeDisplay />
      <div className={styles.header__wrapper} >
        <div >
          <a href="/">
            <img src={logo} alt="logo-plant"/>Plants
          </a> 
        </div>
        <div onClick={toggleMenu} className={styles['header__burger-icon']}  id="navbar-burger-item"> 
          <button className={`${styles['burger-icon']} `} id="navbar-burger-icon">
            <span className={styles['burger-icon__line']}></span>
            <span className={styles['burger-icon__line']}></span>
            <span className={styles['burger-icon__line']}></span>
            <span className={styles['burger-icon__line']}></span>
          </button>
        </div>
        <nav className={styles.header__nav} id="navbar"> 
          <ul className={`${styles['header__nav-list']} `} > 
            <li className={`${styles['header__nav-item']} `} ><Link className={styles['header__nav-link']} to="/">Home</Link></li>
            <li className={`${styles['header__nav-item']} `}><a className={`${styles['header__nav-link']}`} href="#about-us">About us</a></li> 
            <li className={`${styles['header__nav-item']} `}><a className={`${styles['header__nav-link']}`} href="#service">Service</a></li>
            <li className={`${styles['header__nav-item']} `}><a className={`${styles['header__nav-link']}`} href="#price">Price</a></li>
            <li className={`${styles['header__nav-item']} `}><a className={`${styles['header__nav-link']}`} href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 

export default Header

