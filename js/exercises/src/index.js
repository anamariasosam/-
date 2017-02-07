import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router'
import App from './App';
import convert from './convertorIEEE';

const NoMatch = () => (
  <p>No Match <Link to='/'>go back</Link></p>
)

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} />
    <Route path="/ieee" component={convert}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));
