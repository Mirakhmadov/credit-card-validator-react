import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "react-credit-cards/es/styles-compiled.css";
import CustomCardForm from "./components/CustomCardForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CustomCardForm/>
    </React.StrictMode>
);
