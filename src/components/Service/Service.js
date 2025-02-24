import React from "react";

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
              <img src="assets/img/img_1.png" alt="Garden care" />
            </picture>
            <div classNameName="service-item__discription">
              <h3 className="service-item__type">Garden care</h3>
              <p className="service-item__text care">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="planting">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_2_768.png" />
              <img src="assets/img/img_2.png" alt="Planting" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Planting</h3>
              <p className="service-item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="lawn">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_3_768.png" />
              <img src="assets/img/img_3.png" alt="Lawn care" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Lawn care</h3>
              <p className="service-item__text care">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="planting">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_4_768.png" />
              <img src="assets/img/img_4.png" alt="Planting" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Planting</h3>
              <p className="service-item__text">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="garden">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_5_768.png" />
              <img src="assets/img/img_5.png" alt="Garden care" />
            </picture>
            <div className="service-item__discription">
              <h3 className="service-item__type">Garden care</h3>
              <p className="service-item__text care">Lorem Ipsum has been the industry</p>
            </div>
          </div>
          <div className="service-item flex-collum" data-name="planting">
            <picture className="service-item__image">
              <source media="(max-width: 768px)" srcset="assets/img/img_6_768.png" />
              <img src="assets/img/img_6.png" alt="Planting" />
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