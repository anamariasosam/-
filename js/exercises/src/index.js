import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router'
import App from './App';
import BinaryConvertor from './BinaryConvertor';
import DecimalConvertor from './DecimalConvertor';

const NoMatch = () => (
  <p>No Match <Link to='/'>go back</Link></p>
)

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} />
    <Route path="/decimal-to-binary" component={BinaryConvertor}/>
    <Route path="/binary-to-decimal" component={DecimalConvertor}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));
