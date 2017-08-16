
var ReactDOM = require('react-dom');
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Weather}/>
      <Route path='about' component={About}></Route>
      <Route path='examples' component={Examples}></Route>
    </Route>
  </Router>
  , document.getElementById('app'));
