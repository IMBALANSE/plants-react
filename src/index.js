import React from 'react'; 
import * as ReactDOMClient from 'react-dom/client'; 
import './styles/fonts.scss';
import './styles/global.scss'; // вначале ставим глобальные стили, и только после подключения App все стили редактируются каждым компонентом
import App from "./App";
// import './styles/main.css';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);

/* React это ... 

В React-проектах файл index.js (или index.jsx) это 
1. Точка входа (Entry Point)
    Это главный файл, который запускается первым при старте приложения.
    В нем происходит первоначальная "настройка" React-приложения (рендеринг корневого компонента в DOM).
2. Рендеринг корневого компонента
    В index.js обычно используется ReactDOM.createRoot() (или ReactDOM.render() в старых версиях React) для монтирования корневого компонента (обычно App) в HTML-элемент (чаще всего div с id="root").
3. Подключение глобальных зависимостей
    Здесь часто подключают:
      Глобальные стили (например, index.css).
      Провайдеры для Redux, React-Router, Theme (Material-UI) и других библиотек.
      Сервисы (например, аналитику, error tracking).
Важно!
    В современных шаблонах (например, create-react-app, Vite) index.js остается главной точкой входа, но его структура может немного отличаться.
    В Next.js и других фреймворках роль index.js может меняться (например, он становится страницей /pages/index.js).  
    */