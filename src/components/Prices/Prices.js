import React from "react";
import leafsSmallImage from '../../assets/images/leafs_small.png';
import arrowSvg from '../../assets/images/icons/arrow.svg'; 

const Price = () => {
  return (
    <section className="prices" id="price">
      <div className="prices-wrapper flex-row">
        <div className="prices-content flex-collum">
          <h2>Prices</h2>
          <div className="prices-list flex-collum">
            <div className="accordion__item ">
              <div className="accordion__header flex-row">
                <p className="">Basics</p>
                <img className="icon-arrow" src={arrowSvg} alt="arrow" />
              </div>
              <div className="accordion__body">
                <p className="accordion__body_desription">Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
                <p className="accordion__body_desription-price"><span>$25</span> / per hour</p>
                <div className="accordion__body_btn">
                  <p>Order</p>
                </div>
              </div>
            </div>
            <div className="accordion__item" >
              <div className="prices-list__item flex-row accordion__header">
                <p className="list__item_text">Standard</p>
                <img className="icon-arrow" src={arrowSvg} alt="arrow" />
              </div>
              <div className="accordion__body">
                <div className="accordion__body_wrap">
                  <p className="accordion__body_desription">Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
                  <p className="accordion__body_desription-price"><span>$35</span> / per hour</p>
                  <div className="accordion__body_btn">
                    <p>Order</p>
                  </div>
              </div>
              </div>
            </div>
            <div className="accordion__item" >
              <div className="prices-list__item flex-row accordion__header">
                <p className="list__item_text">Pro care</p>
                <img className="icon-arrow" src={arrowSvg} alt="arrow" />
              </div>
              <div className="accordion__body">
                <div className="accordion__body_wrap">
                  <p className="accordion__body_desription">Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
                  <p className="accordion__body_desription-price"><span>$45</span> / per hour</p>
                  <div className="accordion__body_btn">
                    <p>Order</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prices-call-us flex-collum">
          <p>Our best <span className="green-highlight">gardeners</span> are ready to help you</p>
          <button className="service-button contact-us__button">Contact us</button>
          <img className="prices-call-us__image" src={leafsSmallImage} alt="leafs_small" />
        </div>
      </div>
    </section>
  )
}

export default Price