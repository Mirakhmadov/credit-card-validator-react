import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "react-credit-cards/es/styles-compiled.css";
import CustomCard from "./components/CustomCard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CustomCard/>
    </React.StrictMode>
);
