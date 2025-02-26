import React from "react";
import Garden_careImage_1 from '../../assets/images/img_1.png';
import Garden_careImage_2 from '../../assets/images/img_2.png';
import Garden_careImage_3 from '../../assets/images/img_3.png';
import Garden_careImage_4 from '../../assets/images/img_4.png';
import Garden_careImage_5 from '../../assets/images/img_5.png';
import Garden_careImage_6 from '../../assets/images/img_6.png';


const Service = () => {
  return (
    <section className="service" id="service">
      <div className="service-wrapper">
        <div className="service_header flex-row">
          <h2>Service and our projects</h2>
          <div className="service-buttons flex-row">
            <button className="service-button" data-name="garden">Gardens</button>
            <button className="service-button" data-name="lawn">Lawn</button>
            <button className="service-button" data-name="planting">Planting</button>
          </div>
        </div>
        <div className="service-body flex-row">
          <div className="service-item flex-collum" data-name="garden">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_1_768.png" />
              <img src={Garden_careImage_1} alt="Garden care" />
            </picture>
            <div classNameName="service-item__discription">
              <h3 className="service-item__type">Garden care</h3>
              <p className="service-item__text care">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="planting">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_2_768.png" />
              <img src={Garden_careImage_2} alt="Planting" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Planting</h3>
              <p className="service-item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="lawn">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_3_768.png" />
              <img src={Garden_careImage_3} alt="Lawn care" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Lawn care</h3>
              <p className="service-item__text care">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="planting">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_4_768.png" />
              <img src={Garden_careImage_4} alt="Planting" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Planting</h3>
              <p className="service-item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="garden">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_5_768.png" />
              <img src={Garden_careImage_5} alt="Garden care" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Garden care</h3>
              <p className="service-item__text care">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="planting">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_6_768.png" />
              <img src={Garden_careImage_6} alt="Planting" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Planting</h3>
              <p className="service-item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service 