import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiplomaPage from "./components/diploma/DiplomaPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:id" element={<DiplomaPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);