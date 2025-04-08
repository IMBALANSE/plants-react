import React from "react";
import Welcome from '../components/Welcome/Welcome';
import About from '../components/About/About';
import Service from '../components/Service/Service';
import Price from '../components/Prices/Prices';
import Clients from '../components/Clients/Clients';
import Consultation from '../components/Consultation/Consultation';
import Contacts from '../components/Contacts/Contacts';

const MainPage = () => {
  return (
    <>
    <Welcome />
    <About />
    <Service />
    <Price />
    <Clients />
    <Consultation />
    <Contacts />
  </>
  );
};

export default MainPage;