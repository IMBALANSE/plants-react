import React from "react";
import Garden_careImage_4 from "../../assets/images/img_4.png";
import './Oxygen.css';

const Oxygen = () => {
  return (
    <section className="oxygen">
      <div className="oxygen__wrapper flex__row">
        <img className="oxygen__image" src={Garden_careImage_4} alt="leafs" />
        <div className="oxygen__content flex__column">
          <h1>
            Useful amount of <span className="green-highlight">oxygen</span> in
            the room
          </h1>
          <p>
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
