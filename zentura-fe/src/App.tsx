import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewUser from './ViewUser';
import SaveUser from './SaveUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  const [user, setUser] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/')
    .then(response => response.json())
    .then(data => setUser(data))
   console.log(user);
  },[]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewUser ussers={user} />} />
      <Route path="/save" element={<SaveUser/>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
