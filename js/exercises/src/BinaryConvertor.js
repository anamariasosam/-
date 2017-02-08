import React, { Component } from 'react';
import ToBinary from './components/ToBinary';

class BinaryConvertor extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Convertir número a binario de 32bits</h1>
        <ToBinary />
      </div>
    );
  }
}

export default BinaryConvertor;
