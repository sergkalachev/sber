import React from 'react';
import './App.css'
import СonstructorCalculator from './components/constructor/СonstructorCalculator'
import Modal from 'react-modal';
import Header from './components/Header/Header';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

Modal.setAppElement('#root');

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header logoSrc={'../../src/assets/images/Logo.png'} title={'Калькулятор стоимости услуг на внедрение SberCRM'} />
        <СonstructorCalculator />
      </>
    ),
  },
  {
    path: "/calculator",
    element: <СonstructorCalculator />,
  }
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />;
    </>
  )
}

export default App
