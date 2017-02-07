import React, { Component } from 'react';
import Form from './components/Form';

class BinaryConvertor extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Convertir número a binario de 32bits</h1>
        <Form />
      </div>
    );
  }
}

export default BinaryConvertor;
