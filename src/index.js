import React from 'react'; 
import * as ReactDOMClient from 'react-dom/client'; 
import './styles/fonts.scss';
import './styles/global.scss'; 
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);
