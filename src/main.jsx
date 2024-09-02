

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot de react-dom/client
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crie um root
root.render(<App />); // Renderize o componente App
