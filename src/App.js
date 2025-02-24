import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About'
import Service from './components/Service/Service';
import Price from './components/Prices/Prices';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <About />
        <Service />
        <Price />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App