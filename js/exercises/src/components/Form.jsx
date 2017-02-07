import React, { Component } from 'react';
import Convertor from '../Convertor';
import '../styles/Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const number = new Convertor({ number: this.state.value });

    alert(number.toBin());
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="inputbox">
        <input
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
      </form>
    );
  }
}

export default Form;
