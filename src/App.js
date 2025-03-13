import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Oxygen from './components/Oxygen/Oxygen';
import About from './components/About/About';
import Service from './components/Service/Service';
import Price from './components/Prices/Prices';
import Clients from './components/Clients/Clients';
import Consultation from './components/Consultation/Consultation';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import LearnMorePage from './components/ClientsApi/ClientsApi'; // Импортируйте новую страницу
import ConsultationForm from './components/OrderForm/OrderForm'; // Импортируйте новую страницу
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Welcome />
                <About />
                <Service />
                <Price />
                <Clients />
                <Consultation />
                <Contacts />
              </>
            } />
            <Route path="/oxygen" element={<Oxygen />} />
            <Route path="/learn-more" element={<LearnMorePage />} />
            <Route path="/consultation" element={<ConsultationForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

