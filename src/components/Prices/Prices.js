import React, { useState } from 'react';
import leafsSmallImage from '../../assets/images/leafs_small.png';
import arrowSvg from '../../assets/images/icons/arrow.svg';
import styles from './Prices.module.scss'; 

const Price = () => {
  const [activeIndex, setActiveIndex] = useState(null); 
  const toggleAccordion = (index) => { 
    setActiveIndex(activeIndex === index ? null : index); 
  };

  const accordionData = [
    { title: "Basics", price: "$25", description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently" },
    { title: "Standard", price: "$35", description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently" },
    { title: "Pro care", price: "$45", description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently" }
  ];

  return (
    <section className={styles.prices} id="price">
      <div className={`${styles.prices__wrapper}`}>
        <div className={`${styles.prices__content} ` } >
          <h2 className={styles.prices__title}>Prices</h2>
          <div className={`${styles.prices__list} ` } >
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              const activeClass = isActive ? styles.active : "";
              const activeTitleClass = isActive ? styles.active__title : "";
              const activeArrowClass = isActive ? styles.icon__arrow_active : "";
              
              return (
                <div key={index} className={`${styles.accordion__item} ${activeClass}`}> 
                  <div className={`${styles.accordion__header} ${activeClass}`} onClick={() => toggleAccordion(index)}> 
                    <p className={`${styles.accordion__title} ${activeTitleClass}`}>{item.title}</p>
                    <img className={`${styles.icon__arrow} ${activeArrowClass}`} src={arrowSvg} alt="arrow" /> 
                  </div>
                  {isActive && (
                    <div className={`${styles.accordion__body}`}>
                      <p className={styles.accordion__body_description}>{item.description}</p>
                      <p className={styles.accordion__body_descriptionPrice}>
                        <span className={styles['accordion__item-price']}>{item.price}</span> / per hour
                      </p>
                      <div className={styles['accordion__body-btn']}>
                        <p className={styles['accordion__body-btn-text']}>Order</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles['prices__call-us']} ${styles['prices__call-us_column']}`}>
          <p className={styles['prices__call-us-title']}>Our best <span className={styles.prices__highlight}>gardeners</span> are ready to help you</p>
          <a href="#contacts"><button className="button">CONTACT US</button></a>
          <img className={styles.prices__image} src={leafsSmallImage} alt="leafs_small" />
        </div>
      </div>
    </section>
  );
};

export default Price;
