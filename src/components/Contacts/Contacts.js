import React, { useState } from 'react';
import arrowSvgWhite from '../../assets/images/icons/arrow_white.svg'; 
import gardener_womanImage from '../../assets/images/contact_woman.png';

const Contacts = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false); //isOptionsVisible — переменная состояния, которая определяет, виден ли выпадающий список городов.
  const [selectedCity, setSelectedCity] = useState(null); //selectedCity — переменная состояния, которое хранит ключ выбранного города из объекта cities (или null, если город не выбран). Функция setSelectedCity которая меняет состояние лежит в обработчике handleOptionClick

  const cities = {  //cities — это объект, где ключи — это идентификаторы городов, а значения — объекты с информацией о городе (название, телефон, адрес).
    'canandaigua': { name: 'Canandaigua, NY', phone: '+1 585 393 0001', address: '151 Charlotte Street' },
    'new-york': { name: 'New York City', phone: '+1 212 456 0002', address: '9 East 91st Street' },
    'yonkers': { name: 'Yonkers, NY', phone: '+1 914 678 0003', address: '511 Warburton Ave' },
    'sherrill': { name: 'Sherrill, NY', phone: '+1 315 908 0004', address: '14 WEST Noyes BLVD' }
  };

  // handleDropdownClick — переключает видимость выпадающего списка городов и сбрасывает выбранный город.
  const handleDropdownClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
    setSelectedCity(null);
  };

  /* handleOptionClick - Эта функция вызывается при клике на элемент списка. Она принимает ключ города (cityKey) и выполняет следующие действия:
  - Устанавливает выбранный город (selectedCity) в состояние компонента. Если город уже был выбран, то состояние сбрасывается на null.
  - Скрывает выпадающее меню, устанавливая isOptionsVisible в false.*/
  const handleOptionClick = (cityKey) => {
    setSelectedCity(selectedCity === cityKey ? null : cityKey); 
    setIsOptionsVisible(false);
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts-wrapper flex-row">
        {/* */} <img className="contact_woman" src={gardener_womanImage} alt="gardener-woman" />
        <h2>Contact us</h2>
        <div className="contact__container-select">
          <div className="contacts-dropdown flex-row" id="contacts-dropdown" onClick={handleDropdownClick}>
            <p className="contacts-dropdown_text">{selectedCity ? cities[selectedCity].name : 'City'}</p> {/*Квадратные скобки [] в JavaScript используются для доступа к свойствам объекта по ключу, который может быть динамическим (например, переменной). это обрабатывается с помощью тернарного оператора: Если выбран один из городов, то текст будет равен cities[selectedCity].name , иначе строка 'City' */}
            {/* */} <img className="icon-arrow contacts-arrow" src={arrowSvgWhite} alt="arrow" />
          </div>
          {isOptionsVisible && ( 
            <div className="contacts-options" id="contacts-options">
              <ul className="select-options flex-columm">
                 {/* Object.keys(cities) возвращает массив ключей объекта cities. В данном случае это будут строки: ['canandaigua', 'new-york', 'yonkers', 'sherrill']. А Метод map проходит по каждому ключу и создает новый массив элементов <li>, которые будут отображаться в списке. */}
                {Object.keys(cities).map(key => ( 
                  <li key={key} className="select-option" onClick={() => handleOptionClick(key)}> {/* 
                    Каждый элемент списка (<li>) имеет:
                    - Атрибут key={key}, который необходим для идентификации каждого элемента в React. Это помогает React эффективно обновлять и управлять списком.
                    - Обработчик события onClick, который вызывает функцию handleOptionClick с аргументом key (ключ города) при клике на элемент списка.
                    - Внутри элемента списка, т.е. внутри li отображается название города: {cities[key].name}. */}
                    {cities[key].name} 
                  </li>
                  
                ))}
              </ul>
            </div>
          )}
          {selectedCity && (
            <div className="city-container" data-name={selectedCity}>
              <p>City</p>
              <p className="grey">{cities[selectedCity].name}</p>
              <p>Phone:</p>
              <p className="grey">{cities[selectedCity].phone}</p>
              <p>Office address:</p>
              <p className="grey">{cities[selectedCity].address}</p>
              <button className="button1" onClick={() => window.open(`tel: ${cities[selectedCity].phone}`, '_self')}>Call us</button> {/* При клике на кнопку "Call us" открывается стандартное приложение для звонков на номер выбранного города. Почему то стили срабатывают только обновления стр.*/}
              {/*<button className="button1" >Call us</button>*/} 
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default Contacts