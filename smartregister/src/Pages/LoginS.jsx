import React from 'react';
import FormS from '../Components/FormS';
import Back from '../Images/FondoLogin.jpg';

function LoginS() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Back})` }}>
      <div className="absolute inset-0 bg-blue-950 bg-opacity-90"></div>
      <div className="relative z-10 flex items-center justify-center min-h-full">
        <FormS />
      </div>
    </div>
  );
}

export default LoginS;