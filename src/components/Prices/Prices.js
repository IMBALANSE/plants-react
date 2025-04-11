import React, { useState } from 'react';
import leafsSmallImage from '../../assets/images/leafs_small.png';
import arrowSvg from '../../assets/images/icons/arrow.svg';
import styles from './Prices.module.scss'; 

const Price = () => {
  const [activeIndex, setActiveIndex] = useState(null); //useState для управл. состоянием активного элем. аккордеона. • activeIndex — это переменная состояния, которая хранит индекс текущего активного элемента аккордеона. Если ни один элемент не активен, значение будет null

  const toggleAccordion = (index) => { //  Эта функция вызывается при клике на заголовок аккордеона.
    setActiveIndex(activeIndex === index ? null : index); //• Если текущий активный элемент (activeIndex) совпадает с индексом элемента, на который кликнули, то аккордеон закрывается (устанавливается null). В противном случае открывается новый элемент (устанавливается новый индекс в activeIndex).
  };

  //• Массив accordionData содержит данные для каждого элемента аккордеона: заголовок (title), цену (price) и описание (description).
  const accordionData = [
    { title: "Basics", price: "$25", description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently" },
    { title: "Standard", price: "$35", description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently" },
    { title: "Pro care", price: "$45", description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently" }
  ];

  /* Рендеринг аккордеона:
• Компонент возвращает JSX, который отображает секцию с ценами и аккордеоном.
• Каждый элемент аккордеона рендерится с помощью метода map, который проходит по массиву accordionData.
• Заголовок каждого элемента аккордеона (accordion__header) содержит обработчик клика onClick, который вызывает функцию toggleAccordion с индексом текущего элемента.
• Если элемент активен (activeIndex === index), то отображается его содержимое (accordion__body), включая описание, цену и кнопку "Order".
*/
  return (
    <section className={styles.prices} id="price">
      <div className={`${styles.prices__wrapper}`}>
        <div className={`${styles.prices__content} ` } >
          <h2 className={styles.prices__title}>Prices</h2>
          <div className={`${styles.prices__list} ` } >
            {accordionData.map((item, index) => (
              <div key={index} className={`${styles.accordion__item} ${activeIndex === index ? styles.active : ""}`}> {/*start если активный элем совпадает с индексом, то присовим этому элем. класс active */}
                <div className= {`${styles.accordion__header} ${activeIndex === index ? styles.active : ""} `}  onClick={() => toggleAccordion(index)}>  {/*28,03,25 Все начинается с функции toggleAccordion, он меняет состояние activeIndex, Заголовок каждого элемента аккордеона (accordion__header) содержит обработчик клика onClick, который вызывает функцию toggleAccordion с индексом текущего элемента.  */}
                  <p className={`${styles.accordion__title} ${ activeIndex === index ? styles.active__title : ""  } ` } >{item.title}</p>
                  <img className={`${styles.icon__arrow} ${activeIndex === index ? styles.icon__arrow_active : ""} ` }src={arrowSvg} alt="arrow"  /> {/*Иконка стрелки (icon__arrow) поворачивается на 180 градусов, когда элемент аккордеона раскрыт */}
                </div>
                {/*  В JS выражение a && b работает так: если a истинно, то возвращается b. Если a ложно, то возвращается a. Если activeIndex === index истинно (то есть текущий элем. аккордеона активен), то будет отрисован блок <div className="accordion__body">...</div> */}
                {activeIndex === index && (
                  <div className={`${styles.accordion__body}` } >
                    <p className={styles.accordion__body_description}  >{item.description}</p>
                    <p className={styles.accordion__body_descriptionPrice}  ><span className={styles['accordion__item-price']}>{item.price}</span> / per hour</p>
                    <div className={styles['accordion__body-btn']} >
                      <p className={styles['accordion__body-btn-text']}>Order</p> 
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles['prices__call-us']} ${styles['prices__call-us_column']} ` } >
          <p className={styles['prices__call-us-title']}>Our best <span className={styles.prices__highlight}>gardeners</span> are ready to help you</p>
          <a  href="#contacts"><button className="button" >CONTACT US</button></a>
          <img className={styles.prices__image} src={leafsSmallImage} alt="leafs_small" />
        </div>
      </div>
    </section>
  );
};


export default Price


// Метод map Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции. (как for of или for each для ванильного JS)
// Метод map В REACT вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

/* УЛУЧШЕНИЯ 
0 Надо доделать стили
1 В key вместо index прописать id, при этом добавив id каждому объекту в accordionData
*/

//         {`accordion__header flex__row ${activeIndex === index ? "active" : ""} `}