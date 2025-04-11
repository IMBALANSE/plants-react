import React from "react";
import Garden_careImage_4 from "../../assets/images/img_4.png";
import styles from './Oxygen.module.scss'; 

const Oxygen = () => {
  return (
    <section className={styles.oxygen} >
      <div className={`${styles.oxygen__wrapper}` } >
        <img className={styles.oxygen__image} src={Garden_careImage_4} alt="leafs" />
        <div className={`${styles.oxygen__content} `}  >
          <h1 className={styles.oxygen__title}>
            Useful amount of <span className={styles.oxygen__highlight}>oxygen</span> in
            the room
          </h1>
          <p className={styles.oxygen__subtitle}>
            In a small room, 1-3 plants are enough to avoid overloading the
            space. In a medium-sized room, you can place 5-7 plants. In a large
            room or open space, you can create a whole "green corner" with 10 or
            more plants. Some plants, such as chlorophytum, spathiphyllum or
            aloe, help purify the air. If your goal is to improve the
            microclimate, choose these types
          </p>
        </div>
      </div>
    </section>
  );
};

export default Oxygen;
