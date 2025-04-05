import React from 'react';
import houseplantImage from '../../assets/images/houseplant.png';
// import './About.module.scss';
import styles from './About.module.scss'; 

const About = () => {
  return (
    <section className={`${styles.about} `} id="about-us">
      <div className={`${styles.about__wrapper} flex__row` } >
        <div className={`${styles.about__content} flex__column`}>
          <h2 className={`${styles.about__header} `}>We are <span>professional <br /> experienced</span> gardeners</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <img className= {`${styles.about__img} `} src={houseplantImage} alt="houseplant" />
      </div>
    </section>
  )
}
 
export default About 

/* Компонент начинается с import React from 'react'; 
Затем импортируем картинки которые хотим видеть внутри комп-та
Затем стили
с объявления константы именем будущего компонента, где используем стрелочную функцию, где в теле функции используем return и одну скобку, затем пишем весь код html который будет означаать этот компонент
*/