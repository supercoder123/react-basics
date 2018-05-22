'use strict';

var contentNode = document.getElementById('contents');
var bb = document.getElementById('bb');
var newbb = React.createElement(
  'h1',
  null,
  'hello how are you? '
);
var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var message = continents.map(function (c) {
  return 'Hello ' + c + '!';
}).join(' ');
var component = React.createElement(
  'p',
  null,
  message
); // A simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the  content Node
ReactDOM.render(newbb, bb); // Render the component inside the  content Node