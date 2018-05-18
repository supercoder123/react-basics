var contentNode = document.getElementById('contents');
const bbNode = document.getElementById('bb');
var component = React.createElement(
  'h1',
  null,
  'Hello World!'
); // A simple JSX component
var componentTest = React.createElement(
  'h6',
  null,
  'hello how are you?'
); //

ReactDOM.render(component, contentNode); // Render the component inside the content Node
ReactDOM.render(componentTest, bbNode);