import React from 'react';
import logo from './logo.svg';
import './App.css';
import Getemployee from './Module/Pages/Getemployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createemployee from './Module/Pages/Createemployee';
import Updateemployee from './Module/Pages/Updateemployee';
import Privatepage from './Routeguard/Privatepage';

function App() {
  return (
    <div className="App">

<Privatepage />
<BrowserRouter>
 <Routes>
 <Route  path="/data" element={<Getemployee/> } />
  <Route  path="/create" element={<Createemployee /> } />
  <Route path='/update/:id' element={<Updateemployee /> } />   

</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
