import React, { Component } from 'react';
import Convertor from '../Convertor';
import '../styles/Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state =
      { decimal: '',
        binaryNumber: '',
      };

    this.handleDecimalChange = this.handleDecimalChange.bind(this);
    this.handleBinaryChange = this.handleBinaryChange.bind(this);
    this.handleDecimalSubmit = this.handleDecimalSubmit.bind(this);
  }

  handleDecimalChange(event) {
    this.setState({decimal: event.target.value});
  }

  handleBinaryChange(event) {
    this.setState({binaryNumber: event.target.value});
  }

  handleDecimalSubmit(event) {
    event.preventDefault();
    const number = new Convertor({ number: this.state.decimal });
    this.setState({ binaryNumber: number.getBinaryNumber() });
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleDecimalSubmit} className="inputbox">
          <input
            type="number"
            value={this.state.decimal}
            onChange={this.handleDecimalChange}
            placeholder="Número decimal"
          />
        </form>
        <form className="inputbox">
          <input
            type="string"
            value={this.state.binaryNumber}
            onChange={this.handleBinaryChange}
            placeholder="Número binario"
          />
        </form>
      </div>

    );
  }
}

export default Form;
