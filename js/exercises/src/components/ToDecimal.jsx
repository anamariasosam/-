import React, { Component } from 'react';
import Decimal from '../Decimal';
import '../styles/Form.css';


class ToDecimal extends Component {
  constructor(props) {
    super(props);
    this.state =
      { decimalNumber: '',
        binaryNumber: '',
      };

    this.handleBinaryChange = this.handleBinaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBinaryChange(event) {
    this.setState({binaryNumber: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.binaryNumber.length > 0 ) {
      const number = new Decimal({ binary: this.state.binaryNumber });
      this.setState({ decimalNumber: number.getDecimalNumber() });
    }
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="inputbox">
          <input
            type="string"
            value={this.state.binaryNumber}
            onChange={this.handleBinaryChange}
            placeholder="Número Binario"
          />
        </form>
        <p>{ this.state.decimalNumber }</p>
      </div>
    );
  }
}

export default ToDecimal;
