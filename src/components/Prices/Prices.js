import React, { useState } from 'react';
import leafsSmallImage from '../../assets/images/leafs_small.png';
import arrowSvg from '../../assets/images/icons/arrow.svg';

const Price = () => {
  const [activeIndex, setActiveIndex] = useState(null); //useState для управл. состоянием активного элем. аккордеона. • activeIndex — это переменная состояния, которая хранит индекс текущего активного элемента аккордеона. Если ни один элемент не активен, значение будет null

  const toggleAccordion = (index) => { //•  Эта функция вызывается при клике на заголовок аккордеона.
    setActiveIndex(activeIndex === index ? null : index); //• Если текущий активный элемент (activeIndex) совпадает с индексом элемента, на который кликнули, то аккордеон закрывается (устанавливается null). В противном случае открывается новый элемент (устанавливается новый индекс).
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
    <section className="prices" id="price">
      <div className="prices-wrapper flex-row">
        <div className="prices-content flex-collum">
          <h2>Prices</h2>
          <div className="prices-list flex-collum">
            {accordionData.map((item, index) => (
              <div key={index} className={`accordion__item ${activeIndex === index ? "active" : ""}`}> {/* Активный элемент аккордеона получает класс active, который может использоваться для стилизации. Т.е. если активный элем совпадает с индексом, то присовим этому элем. класс active */}
                <div className="accordion__header flex-row" style={{ backgroundColor:  activeIndex === index ?  "#D6E7D2" : "" }} onClick={() => toggleAccordion(index)}>  {/*Заголовок каждого элемента аккордеона (accordion__header) содержит обработчик клика onClick, который вызывает функцию toggleAccordion с индексом текущего элемента.  */}
                  <p style={{ color: activeIndex === index ? "#E06733" : "" }}>{item.title}</p>
                  <img className="icon-arrow" src={arrowSvg} alt="arrow" style={{ transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)" }} /> {/*Иконка стрелки (icon-arrow) поворачивается на 180 градусов, когда элемент аккордеона раскрыт */}
                </div>
                {/*  В JS выражение a && b работает так: если a истинно, то возвращается b. Если a ложно, то возвращается a. Если activeIndex === index истинно (то есть текущий элем. аккордеона активен), то будет отрисован блок <div className="accordion__body">...</div> */}
                {activeIndex === index && (
                  <div className="accordion__body">
                    <p className="accordion__body_description">{item.description}</p>
                    <p className="accordion__body_description-price"><span>{item.price}</span> / per hour</p>
                    <div className="accordion__body_btn">
                      <p>Order</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="prices-call-us flex-collum">
          <p>Our best <span className="green-highlight">gardeners</span> are ready to help you</p>
          <a href="#contacts"><button className="button" >CONTACT US</button></a>
          <img className="prices-call-us__image" src={leafsSmallImage} alt="leafs_small" />
        </div>
      </div>
    </section>
  );
};


export default Price


// Метод map Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
// Метод map В REACT вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

/* УЛУЧШЕНИЯ 
0 Надо доделать стили
1 В key вместо index прописать id, при этом добавив id каждому объекту в accordionData
*/
