import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewUser from './ViewUser';
import SaveUser from './SaveUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewUser/>} />
      <Route path="/save" element={<SaveUser/>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
