import React from "react";
import arrowSvgWhite from '../../assets/images/icons/arrow_white.svg'; 
import gardener_womanImage from '../../assets/images/contact_woman.png';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-wrapper flex-row">
        <img className="contact_woman" src={gardener_womanImage} alt="gardener-woman" />
        <h2>Contact us</h2>
        <div className="contact__container-select">
          <div className="contacts-dropdown flex-row" id="contacts-dropdown">
            <p className="contacts-dropdown_text">City</p>
            <img className="icon-arrow contacts-arrow" src={arrowSvgWhite} alt="arrow" />
          </div>
          {/** <!-- ниже идут скрытые блоки -->*/}
          <div className="contacts-options" id="contacts-options">
            <ul className="select-options flex-columm">
              <li className="select-option" data-name="canandaigua">Canandaigua, NY</li>
              <li className="select-option" data-name="new-york">New York City</li>
              <li className="select-option" data-name="yonkers">Yonkers, NY</li>
              <li className="select-option" data-name="sherrill">Sherrill, NY</li>
            </ul>
          </div>
          <div className="city-container" data-name="yonkers">
            <p>City</p>
            <p className="grey">Yonkers, NY</p>
            <p>Phone:</p>
            <p className="grey">+1 914 678 0003</p>
            <p>Office adress:</p>
            <p className="grey">511 Warburton Ave</p>
            <button className="button" onclick="window.open('tel: +1 914 678 0003','_self');">Call us</button>
          </div>
          <div className="city-container" data-name="canandaigua">
            <p>City</p>
            <p className="grey">Canandaigua, NY</p>
            <p>Phone:</p>
            <p className="grey">+1 585 393 0001</p>
            <p>Office adress:</p>
            <p className="grey">151 Charlotte Street</p>
            <button className="button" onclick="window.open('tel: +1 585 393 0001','_self');">Call us</button>
          </div>
          <div className="city-container" data-name="sherrill">
            <p>City</p>
            <p className="grey">Sherrill, NY</p>
            <p>Phone:</p>
            <p className="grey">+1 315 908 0004</p>
            <p>Office adress:</p>
            <p className="grey">14 WEST Noyes BLVD</p>
            <button className="button" onclick="window.open('tel: +1 315 908 0004','_self');">Call us</button>
          </div>
          <div className="city-container" data-name="new-york">
            <p>City</p>
            <p className="grey">New York City</p>
            <p>Phone:</p>
            <p className="grey">+1 212 456 0002</p>
            <p>Office adress:</p>
            <p className="grey">9 East 91st Street</p>
            <button className="button" onclick="window.open('tel: +1 212 456 0002','_self');">Call us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts