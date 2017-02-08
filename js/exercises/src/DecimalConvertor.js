import React, { Component } from 'react';
import ToDecimal from './components/ToDecimal';

class DecimalConvertor extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Convertir binario de 32bits a decimal</h1>
        <ToDecimal />
      </div>
    );
  }
}

export default DecimalConvertor;
