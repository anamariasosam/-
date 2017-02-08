import React, { Component } from 'react';
import Binary from '../Binary';
import '../styles/Form.css';


class ToBinary extends Component {
  constructor(props) {
    super(props);
    this.state =
      { decimalNumber: '',
        binaryNumber: '',
      };

    this.handleDecimalChange = this.handleDecimalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDecimalChange(event) {
    this.setState({decimalNumber: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.decimalNumber.length > 0 ) {
      const number = new Binary({ number: this.state.decimalNumber });
      this.setState({ binaryNumber: number.getBinaryNumber() });
    }
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="inputbox">
          <input
            type="string"
            value={this.state.decimalNumber}
            onChange={this.handleDecimalChange}
            placeholder="Número decimal"
          />
        </form>
        <p>{ this.state.binaryNumber }</p>
      </div>
    );
  }
}

export default ToBinary;
