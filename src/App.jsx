import React, { useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './components/Sign';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';
import Tuto from './components/Tutorial/Tuto';
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function App() {


  return (
    <ChakraProvider>
      <ColorModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Tuto" element={<Tuto />} />

          </Routes>

        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
