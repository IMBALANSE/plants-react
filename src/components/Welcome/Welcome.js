import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import leafsImage from '../../assets/images/leafs.png';
// import './Welcome.scss';
import styles from './Welcome.module.scss'; 


const Welcome = () => {
  const navigate = useNavigate(); // useNavigate для навигации

  const handleLearnMoreClick = () => {
    navigate('/oxygen'); // Переход на страницу /oxygen
  };

  return (
    <section className={`${styles.welcome} flex__row` }>
      <div className={`${styles.welcome__wrapper} flex__row` }>
        <img className={styles.welcome__image} src={leafsImage} alt="leafs" />
        <div className={`${styles.welcome__content} flex__column`}>
          <h1>We grow <span >plants</span> and give you oxygen</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className="button" onClick={handleLearnMoreClick}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

/* Компонент начинается с import React from 'react'; 
Затем импортируем картинки которые хотим видеть внутри комп-та
Затем стили
с объявления константы именем будущего компонента, где используем стрелочную функцию, где в теле функции используем return и одну скобку, затем пишем весь код html который будет означаать этот компонент
+
Импортируем хуки, которые все начинаются с use в нашем случае useNavigate из библиотеки 'react-router-dom', который служит для навигации и дает возможность переключаться на другие страницы
*/