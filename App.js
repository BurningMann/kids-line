"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import MainPage from './components/MainPage.js';
import Footer from './components/Footer.js';
import NewsPage from './components/NewsPage.js';
import Modals from './components/Modals.js';
import DetailNews from './components/DetailNews.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Catalog from './components/Catalog.js';
import ProductPage from './components/ProductPage.js';



ReactDOM.render(
  <div>
  <Header/>

   <MainPage/>

  <NewsPage/>

   <DetailNews/>

  <About/>

  <Contact/>

  <Catalog/> 

  <ProductPage/>


  <Modals/>


  <Footer/>

  </div>
  , document.getElementById('main_content') 
);

