import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Header from 'components/header/header';
import Main from 'pages/main/main';
import About from 'pages/about/about';
import Contact from 'pages/contact/contact';
import MainLayout from 'components/main-layout/main-layout';


const Router = () => (
  <>
    <BrowserRouter>
      <Header />
      <MainLayout>
        <>
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route
              path="*"
              element={ <Navigate to="/" replace /> }
            />
          </Routes>
        </>
      </MainLayout>
    </BrowserRouter>
  
  </>
);

export default Router;