import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginS';
import Collegue from './Pages/Collegue';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className='Rutas'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/colleague' element={<Collegue />} ></Route>
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;