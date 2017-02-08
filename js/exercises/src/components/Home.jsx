import React from 'react';
import {Link} from 'react-router';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <h1 className="title">
        <Link to='/'>Ejercicios Métodos Numéricos</Link>
      </h1>
      <div className="content">
        <div className="menu">
          <Link to="/decimal-to-binary">Decimal a binario de 32bits</Link>
          <Link to="/binary-to-decimal">Binario a decimal</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
