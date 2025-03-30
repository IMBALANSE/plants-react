import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Oxygen from './pages/Oxygen/Oxygen';
import About from './components/About/About';
import Service from './components/Service/Service';
import Price from './components/Prices/Prices';
import Clients from './components/Clients/Clients';
import ClientsApi from './pages/ClientsApi/ClientsApi'; 
import Consultation from './components/Consultation/Consultation';
import ConsultationForm from './pages/ConsultationForm/ConsultationForm';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

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
            <Route path="/Clients" element={<ClientsApi />} />
            <Route path="/consultation" element={<ConsultationForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

/* В React-проектах файл App.js (или App.jsx) является корневым компонентом приложения. Он служит точкой входа для рендеринга всего UI и обычно выполняет следующие функции:
1. Главный компонент приложения
    Это "скелет" вашего React-приложения, куда добавляются другие компоненты (например, страницы, шапка, подвал).
2. Хранение глобального состояния
    В App.js часто подключаются контексты (Context API) или хранилища (например, Redux), чтобы передавать данные дочерним компонентам.
3. Маршрутизация (Routing)
    Если используется React Router, в App.js настраиваются пути для страниц:
4. Глобальные стили или темы
5. Инициализация приложения
    В App.js могут выполняться начальные действия: проверка аутентификации, загрузка конфигураций и т.д. 
Важно:
    В современных React-проектах (например, созданных через create-react-app или Vite) App.js рендерится в main.js/index.js через ReactDOM.createRoot.
    В Next.js или других фреймворках роль App.js может выполнять другой файл (например, _app.js). */


/* BrowserRouter — это компонент из библиотеки React Router, который предоставляет функциональность маршрутизации (роутинга)
RVF Простыми словами дает возможность переклюючаться по страницами. Туда же относятся Routes и Route 
RVF Компонент <Route path="/oxygen" element={<Oxygen />} /> это как отдельная страница, главная тоже имеет <Route...
path — это строка, которая определяет URL-путь, с которым будет сопоставлен этот маршрут. Когда пользователь переходит по адресу, который совпадает с path (в данном случае /oxygen), React Router отображает компонент, указанный в element.
*/


/* RVF здесь использован метод поджатия футера к низу, поэтому применены <div className='app-container' и <main className="main-content">>

*/