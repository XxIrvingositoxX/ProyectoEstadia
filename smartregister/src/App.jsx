import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginS';
import Collegue from './Pages/Collegue';

function App() {
  return (
    <Router>
      <div className='Rutas'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/colleague' element={<Collegue/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;