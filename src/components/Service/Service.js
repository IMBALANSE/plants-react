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
import './Service.css';


/* - useState: Используется для хранения активных фильтров. activeFilters — это массив, который содержит текущие выбранные фильтры.
    - useRef: Используется для хранения ссылок на DOM-элементы (кнопки фильтров и карточки). filterBtnsRef и cardsRef — это массивы, которые хранят ссылки на соответствующие элементы.
    - useEffect: Используется для выполнения побочных эффектов, таких как добавление и удаление обработчиков событий, а также для обновления карточек при изменении активных фильтров. */
const Service = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const filterBtnsRef = useRef([]);
  const cardsRef = useRef([]);

  /*     В первом useEffect (который выполняется только при монтировании компонента) происходит инициализация рефов:
    - filterBtnsRef.current получает все элементы с классом .service__button (кнопки фильтров).
    - cardsRef.current получает все элементы с классом .service__item (карточки). */
  useEffect(() => {
    filterBtnsRef.current = document.querySelectorAll('.service__button');
    cardsRef.current = document.querySelectorAll('.service__item');

    const handleFilterClick = (itemBtn) => { //Здесь itemBtn — это параметр функции, который передается при вызове handleFilterClick. Этот параметр представляет собой элемент DOM (кнопку), на который был совершен клик.
      //Описание функции handleFilterClick
             // Обновляет состояние activeFilters. 1) Если фильтр уже активен, он удаляется из массива 2) Если фильтр не активен и количество активных фильтров меньше 2, он добавляется в массив 3) Если количество активных фильтров уже равно 2, то первый фильтр удаляется, а новый добавляется. 
      const filterDataValue = itemBtn.dataset.name; // прочитаем значение data-атр у текущей кнопки фильтра
      setActiveFilters(prevFilters => { // prevFilters это текущее значение состояния activeFilters на момент вызова функции обновления setActiveFilters.
        itemBtn.classList.remove('activeBtn'); // уберем CSS свойство активной кнопки, при первом нажатии этой свойства нет ни у кого , его можно будет убрать только при втором нажатии
        if (prevFilters.includes(filterDataValue)) { // через .includes проверим, есть ли filterDataValue в массиве. // вернет булевое.// при первом клике false при втором тру
          return prevFilters.filter(activeFilter => activeFilter !== filterDataValue); // activeFilter — это текущий элемент массива prevFilters, который проверяется на равенство с filterDataValue. Через .filter отфильтруем значение, сравнивая на строгое несовпадение. Если нажмем второй раз на ту жу фильтр-кнопку, сравнение в стрелочной функ "уже имеющийся элемент массива не равен текущему даст false, т.к. они будут равны, и в обновленный массив этот элемент не попадет (т.е до второго нажатия этот элем был, после 2 клика этого элем не стало) 
          // (Метод filter возвращает новый массив отфильтрованных с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции "RVF если true"  примет решение включать этот элемент в новый массив. )
        } else {
          if (prevFilters.length < 2) {
            itemBtn.classList.add('activeBtn'); //Добавим CSS класс у текущей кнопки фильтра
            return [...prevFilters, filterDataValue]; //это создание нового массива, который включает все элементы из сущ. массива prevFilters, куда добавляет новый элемент filterDataValue, так же ... это оператор расширения, мы расширяем массив добавив новый элемент filterDataValue
          } else { // Если >2 элементов в массиве prevFilters
            const removedFilter = prevFilters[0]; //выбираем самый первый элемент массмва prevFilters
            document.querySelector(`.service__button[data-name="${removedFilter}"]`).classList.remove('activeBtn'); //удаляем его класс
            itemBtn.classList.add('activeBtn'); //Добавим CSS класс у текущей кнопки фильтра
            return [...prevFilters.slice(1), filterDataValue]; // slice(1) — метод массива, который возвращает новый массив, начиная с индекса 1 и до конца исходного массива. То есть, он удаляет первый элемент массива. После выполнения метода добавится новый элемент filterDataValue
          }
        }
      });
    };

    //Для каждой кнопки фильтра добавляется обработчик события click, который вызывает функцию handleFilterClick.
    filterBtnsRef.current.forEach(itemBtn => { //Здесь itemBtn — это переменная, которая принимает значение каждого элемента из коллекции filterBtnsRef.current. В данном случае itemBtn также является элементом DOM (кнопкой), и этот элемент передается в функцию handleFilterClick при клике. itemBtn в этих двух местах одинаковы по смыслу и содержанию, так как они оба представляют собой элемент DOM, на который был совершен клик.
      itemBtn.addEventListener('click', () => handleFilterClick(itemBtn));
    });

    //Очистка обработчиков событий // При размонтировании компонента (или перед повторным выполнением useEffect) все обработчики событий удаляются, чтобы избежать утечек памяти.
    return () => {
      filterBtnsRef.current.forEach(itemBtn => { //для каждого перечисляемого элем будет колбек с параметром itemBtn
        itemBtn.removeEventListener('click', () => handleFilterClick(itemBtn));
      });
    };
  }, []);

  // Обновление карточек при изменении фильтров. Второй useEffect следит за изменением состояния activeFilters и обновляет видимость карточек:
  useEffect(() => {
    const updateCards = () => {
      cardsRef.current.forEach(card => { // Перебираем карточки
        const cardCategories = card.dataset.name.split(' '); // создадим из массива элементов массив с одним элементом внутри через .split(' ') Т.е. из ['1', '2', '3'] получим ['1'] ['2'] ['3']
        if (activeFilters.some(filter => cardCategories.includes(filter))) { // Если хотя бы один активный фильтр совпадает с категорией карточки, убираем blur
          card.classList.remove('blur'); // убираем стиль блюр у текущей карточки
        } else { // иначе добавляем стиль блюр этой карточке
          card.classList.add('blur');
        }
      });

      // Если нет активных фильтров, убрать blur со всех карточек
      if (activeFilters.length === 0) {
        cardsRef.current.forEach(card => card.classList.remove('blur'));
      }
    };

    updateCards();
  }, [activeFilters]);

  // ЗАМЕТКИ 
  // Метод filter возвращает новый массив отфильтрованных с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции "RVF если true"  примет решение включать этот элемент в новый массив. 

  // Метод .includes() . Синтаксис : массив.includes(элемент); Для массивов: проверяет, есть ли искомый элемент в массиве. Для строк: проверяет, есть ли искомая подстрока в строке. Возвр. true, если искомый элем нашёлся, иначе false
  // let arr = [1, 2, 3, 4, 5];
  // let res = arr.includes(3);
  // console.log(res);

  // Метод split разбивает строки в массив по указанному в первом параметре разделителю. Если он не задан - вернется вся строка. Если он задан как пустые кавычки, то каждый символ строки попадет в отдельный элемент массива. Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве.
  // let num = 12345;
  // let str = String(num);
  // let arr = str.split('');
  // console.log(arr); // ['1', '2', '3', '4', '5']

  // let num1 = 12345;
  // let str1 = String(num);
  // let arr1 = str1.split(' ');
  // console.log(arr1); // ['12345']

  // let arr3 = ['1', '2', '3', '4', '5']
  // arr3.forEach(a => { // для каждого перечисляемого элем будет колбек с параметром a 
  //   console.log(a.split(' ')); // ['1'] ['2'] ['3'] ['4'] ['5']
  // })

  // Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке. Колбэк-функция будет вызываться для каждого элемента массива до тех пор, пока не вернётся true, либо пока не закончатся элементы массива.

  return (
    <section className="service" id="service">
      <div className="service__wrapper">
        <div className="service__header flex__row">
          <h2>Service and our projects</h2>
          <div className="service__buttons flex__row">
            <button className="service__button" data-name="garden">Gardens</button>
            <button className="service__button" data-name="lawn">Lawn</button>
            <button className="service__button" data-name="planting">Planting</button>
          </div>
        </div>

        <div className="service__body flex__row">
          <div className="service__item flex__column" data-name="garden">
            <picture className="service__item__image">
              <source media="(max-width: 1440px)" srcset={Garden_careImage_1_768} />
              <img src={Garden_careImage_1} alt="Garden care" />
            </picture>
            <div className="service__item__discription">
              <h3 className="service__item__type">Garden care</h3>
              <p className="service__item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service__item flex__column" data-name="planting">
            <picture className="service__item__image">
              <source media="(max-width: 1440px)" srcset={Garden_careImage_2_768} />
              <img src={Garden_careImage_2} alt="Planting" />
            </picture>
            <div className="service__item__discription">
              <h3 className="service__item__type">Planting</h3>
              <p className="service__item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service__item flex__column" data-name="lawn">
            <picture className="service__item__image">
              <source media="(max-width: 1440px)" srcset={Garden_careImage_3_768} />
              <img src={Garden_careImage_3} alt="Lawn care" />
            </picture>
            <div className="service__item__discription">
              <h3 className="service__item__type">Lawn care</h3>
              <p className="service__item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service__item flex__column" data-name="planting">
            <picture className="service__item__image">
              <source media="(max-width: 1440px)" srcset={Garden_careImage_4_768} />
              <img src={Garden_careImage_4} alt="Planting" />
            </picture>
            <div className="service__item__discription">
              <h3 className="service__item__type">Planting</h3>
              <p className="service__item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service__item flex__column" data-name="garden">
            <picture className="service__item__image">
              <source media="(max-width: 1440px)" srcset={Garden_careImage_5_768} />
              <img src={Garden_careImage_5} alt="Garden care" />
            </picture>
            <div className="service__item__discription">
              <h3 className="service__item__type">Garden care</h3>
              <p className="service__item__text ">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service__item flex__column" data-name="planting">
            <picture className="service__item__image">
              <source media="(max-width: 1440px)" srcset={Garden_careImage_6_768} />
              <img src={Garden_careImage_6} alt="Planting" />
            </picture>
            <div className="service__item__discription">
              <h3 className="service__item__type">Planting</h3>
              <p className="service__item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service

