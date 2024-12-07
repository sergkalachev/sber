import React from 'react';
import './App.css';
import СonstructorCalculator from './components/constructor/СonstructorCalculator';
import Modal from 'react-modal';
import Header from './components/Header/Header';
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
Modal.setAppElement('#root');
const router = createBrowserRouter([
    {
        path: "/",
        element: (React.createElement(React.Fragment, null,
            React.createElement(Header, { logoSrc: '../../src/assets/images/Logo.png', title: 'Калькулятор стоимости услуг на внедрение SberCRM' }),
            React.createElement(СonstructorCalculator, null))),
    },
    {
        path: "/calculator",
        element: React.createElement(СonstructorCalculator, null),
    }
]);
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(RouterProvider, { router: router }),
        ";"));
}
export default App;
