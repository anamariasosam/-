import React from 'react';
import {Link} from 'react-router';

const Home = () => {
  return (
    <div>
      <h1 className="title">
        <Link to='/'>Ejercicios Métodos Numéricos</Link>
      </h1>
      <div className="content">
        <div className="menu">
          <Link to='/ieee'>Conversión de un número a binario de 32bits</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
