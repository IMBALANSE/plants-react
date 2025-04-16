import React, { useState } from 'react';
import arrowSvgWhite from '../../assets/images/icons/arrow_white.svg'; 
import gardener_womanImage from '../../assets/images/contact_woman.png';
import styles from './Contacts.module.scss'; 

const Contacts = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false); 
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = { 
    'canandaigua': { name: 'Canandaigua, NY', phone: '+1 585 393 0001', address: '151 Charlotte Street' },
    'new-york': { name: 'New York City', phone: '+1 212 456 0002', address: '9 East 91st Street' },
    'yonkers': { name: 'Yonkers, NY', phone: '+1 914 678 0003', address: '511 Warburton Ave' },
    'sherrill': { name: 'Sherrill, NY', phone: '+1 315 908 0004', address: '14 WEST Noyes BLVD' }
  };

  const handleDropdownClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
    setSelectedCity(null);
  };

  const handleOptionClick = (cityKey) => {
    setSelectedCity(selectedCity === cityKey ? null : cityKey); 
    setIsOptionsVisible(false);
  };

  const isVisible = isOptionsVisible !== false;
  const openClass = (selectedCity || isVisible) ? styles.open : "";
  const cityName = selectedCity ? cities[selectedCity].name : 'City' ; 
  const activeArrow = isVisible ? styles.contacts__arrow_active : "";
  const handleCallClick = () => window.open(`tel: ${cities[selectedCity].phone}`, '_self');

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.contacts__wrapper} >
        <img className={`${styles.contacts__woman} ${openClass}`} src={gardener_womanImage} alt="gardener-woman" />
        <h2 className={styles.contacts__title}>Contact us</h2>
        <div className={`${styles.contacts__container_select} ${openClass}`}>
          <div className={`${styles.contacts__dropdown} ${openClass}`} id="contacts__dropdown" onClick={handleDropdownClick}> 
            <p className={styles.contacts__city_word}>{cityName}</p> 
            <img className={`${styles.contacts__arrow} ${activeArrow}`} src={arrowSvgWhite} alt="arrow" />
          </div>
          {isOptionsVisible && ( 
            <div className={styles.contacts__options} id="contacts__options">
              <ul  >
                {Object.keys(cities).map(key => ( 
                  <li key={key} className={styles.select__option} onClick={() => handleOptionClick(key)}> 
                    {cities[key].name} 
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedCity && ( 
          
            <div className={styles.city__container} >
              <p className={styles.city__title}>City:</p>
              <p className={styles.city__value}>{cities[selectedCity].name}</p>
              <p className={styles.city__title}>Phone:</p>
              <p className={styles.city__value}>{cities[selectedCity].phone}</p>
              <p className={styles.city__title}>Office address:</p>
              <p className={styles.city__value}>{cities[selectedCity].address}</p>
              <button 
                className={styles.city__button} 
                onClick={handleCallClick}
              >
                Call us
              </button> 
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacts

