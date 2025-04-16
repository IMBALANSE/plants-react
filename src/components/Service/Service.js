import React, { useState, useEffect, useRef } from 'react';
import Garden_careImage_1 from '../../assets/images/img_1.png';
import Garden_careImage_1_768 from '../../assets/images/img_1_768.png';
import Garden_careImage_2 from '../../assets/images/img_2.png';
import Garden_careImage_2_768 from '../../assets/images/img_2_768.png';
import Garden_careImage_3 from '../../assets/images/img_3.png';
import Garden_careImage_3_768 from '../../assets/images/img_3_768.png';
import Garden_careImage_4 from '../../assets/images/img_4.png';
import Garden_careImage_4_768 from '../../assets/images/img_4_768.png';
import Garden_careImage_5 from '../../assets/images/img_5.png';
import Garden_careImage_5_768 from '../../assets/images/img_5_768.png';
import Garden_careImage_6 from '../../assets/images/img_6.png';
import Garden_careImage_6_768 from '../../assets/images/img_6_768.png';
import styles from './Service.module.scss'; 

const Service = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const filterBtnsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    filterBtnsRef.current = document.querySelectorAll(`.${styles.service__button}`);
    cardsRef.current = document.querySelectorAll(`.${styles.service__item}`);

    const handleFilterClick = (itemBtn) => { 
      const filterDataValue = itemBtn.dataset.name; 
      const isNotFilterDataValue = activeFilter => activeFilter !== filterDataValue;
      setActiveFilters(prevFilters => { 
        itemBtn.classList.remove(styles.activeBtn); 
        if (prevFilters.includes(filterDataValue)) { 
          return prevFilters.filter(isNotFilterDataValue); 
        } else {
          if (prevFilters.length < 2) {
            itemBtn.classList.add(styles.activeBtn); 
            return [...prevFilters, filterDataValue]; 
          } else { 
            const removedFilter = prevFilters[0]; 
            document.querySelector(`.${styles.service__button}[data-name="${removedFilter}"]`).classList.remove(styles.activeBtn); 
            itemBtn.classList.add(styles.activeBtn); 
            return [...prevFilters.slice(1), filterDataValue]; 
          }
        }
      });
    };

    filterBtnsRef.current.forEach(itemBtn => { 
      itemBtn.addEventListener('click', () => handleFilterClick(itemBtn));
    });

    return () => {
      filterBtnsRef.current.forEach(itemBtn => { 
        itemBtn.removeEventListener('click', () => handleFilterClick(itemBtn));
      });
    };
  }, []);

  useEffect(() => {
    const updateCards = () => {
      cardsRef.current.forEach(card => { 
        const cardCategories = card.dataset.name.split(' '); 
        if (activeFilters.some(filter => cardCategories.includes(filter))) { 
          card.classList.remove(styles.blur); 
        } else {
          card.classList.add(styles.blur);
        }
      });

      if (activeFilters.length === 0) {
        cardsRef.current.forEach(card => card.classList.remove(styles.blur));
      }
    };

    updateCards();
  }, [activeFilters]);

  return (
    <section className={styles.service} id="service">
      <div className={styles.service__wrapper} >
        <div className= {`${styles.service__control}` }>
          <h2 className={styles.service__title} >Service and our projects</h2>
          <div className={`${styles.service__buttons} ` }>
            <button className={styles.service__button} data-name="garden">Gardens</button>
            <button className={styles.service__button} data-name="lawn">Lawn</button>
            <button className={styles.service__button} data-name="planting">Planting</button>
          </div>
        </div>
        <div className={`${styles.service__body}` }>
          <div className={`${styles.service__item}`} data-name="garden">
            <picture className={styles['service__item-picture']}>
              <source media="(max-width: 1440px)" srcset={Garden_careImage_1_768} />
              <img className={styles['service__item-image']} src={Garden_careImage_1} alt="Garden care" />
            </picture>
            <div className={styles['service__item-discription']} >
              <h3 className= {styles['service__item-title']}  >Garden care</h3>
              <p  className= {styles['service__item-subtitle']} >Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className={`${styles.service__item}`} data-name="planting">
            <picture className={styles['service__item-picture']}>
              <source media="(max-width: 1440px)" srcset={Garden_careImage_2_768} />
              <img className={styles['service__item-image']} src={Garden_careImage_2} alt="Planting" />
            </picture>
            <div className={styles['service__item-discription']}>
              <h3 className= {styles['service__item-title']}  >Planting</h3>
              <p  className= {styles['service__item-subtitle']} >Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className={`${styles.service__item}`} data-name="lawn">
            <picture className={styles['service__item-picture']}>
              <source media="(max-width: 1440px)" srcset={Garden_careImage_3_768} />
              <img className={styles['service__item-image']} src={Garden_careImage_3} alt="Lawn care" />
            </picture>
            <div className={styles['service__item-discription']}>
              <h3 className= {styles['service__item-title']}  >Lawn care</h3>
              <p  className= {styles['service__item-subtitle']} >Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className={`${styles.service__item}`} data-name="planting">
            <picture className={styles['service__item-picture']}>
              <source media="(max-width: 1440px)" srcset={Garden_careImage_4_768} />
              <img className={styles['service__item-image']} src={Garden_careImage_4} alt="Planting" />
            </picture>
            <div className={styles['service__item-discription']}>
              <h3 className= {styles['service__item-title']}  >Planting</h3>
              <p  className= {styles['service__item-subtitle']} >Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className={`${styles.service__item}`} data-name="garden">
            <picture className={styles['service__item-picture']}>
              <source media="(max-width: 1440px)" srcset={Garden_careImage_5_768} />
              <img className={styles['service__item-image']} src={Garden_careImage_5} alt="Garden care" />
            </picture>
            <div className={styles['service__item-discription']}>
              <h3 className= {styles['service__item-title']}  >Garden care</h3>
              <p  className= {styles['service__item-subtitle']} >Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className={`${styles.service__item}`} data-name="planting">
            <picture className={styles['service__item-picture']}>
              <source media="(max-width: 1440px)" srcset={Garden_careImage_6_768} />
              <img className={styles['service__item-image']} src={Garden_careImage_6} alt="Planting" />
            </picture>
            <div className={styles['service__item-discription']}>
              <h3 className= {styles['service__item-title']}  >Planting</h3>
              <p  className= {styles['service__item-subtitle']} >Lorem Ipsum has been the industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service

