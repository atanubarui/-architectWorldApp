
import { Route, Routes} from 'react-router-dom'


import React from 'react'

import Footer from './components/Footer'
import Home from './components/Home'
import  { useState } from "react";


import Singup from './components/Singup'

function App() {
  

  return (
    <>
    
    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singup" element={<Singup/>}/>


      </Routes>
      
     


    </>
  );
};

export default App
