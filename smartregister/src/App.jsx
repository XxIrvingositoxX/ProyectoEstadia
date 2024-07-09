import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginS';
import Collegue from './Pages/Collegue';
import Visitors from './Pages/Visitors';
import Keys from './Pages/Keys';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className='Rutas'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/colleague' element={<Collegue />} ></Route>
          <Route path='/visitors' element={<Visitors />} />
          <Route path='/keys' element={<Keys />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;