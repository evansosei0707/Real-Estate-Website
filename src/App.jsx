import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import PropertyDetails from './Pages/PropertyDetails';
import Home from './Pages/Home';

function App() {
  return (
    <div className="max-w-[1440px} mx-auto bg-white" >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
