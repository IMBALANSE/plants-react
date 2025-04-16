import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Oxygen from './pages/Oxygen/Oxygen';
import ClientsList from './pages/ClientsList/ClientsList'; 
import ConsultationForm from './pages/ConsultationForm/ConsultationForm';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} /> 
            <Route path="/oxygen" element={<Oxygen />} />
            <Route path="/clients" element={<ClientsList />} />
            <Route path="/consultation" element={<ConsultationForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

