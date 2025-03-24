import React from 'react'; 
import * as ReactDOMClient from 'react-dom/client'; 
import './styles/fonts.css';
import './styles/global.css'; // вначале ставим глобальные стили, и только после подключения App все стили редактируются каждым компонентом
import App from "./App";
// import './styles/main.css';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);

