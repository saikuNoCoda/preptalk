import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Banner from "./components/Banner";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Contact from "./components/Contact";


import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />     
      <About />
      <Pricing />
      <Testimonial />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
