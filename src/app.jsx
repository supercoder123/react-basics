var contentNode = document.getElementById('contents');
const bbNode = document.getElementById('bb');
var component = <h1>Hello World!</h1>; 				// A simple JSX component
var componentTest = <h6>babel test afasdfa adsfasfafadsf</h6>;    //

ReactDOM.render(component, contentNode); 			// Render the component inside the content Node
ReactDOM.render(componentTest,bbNode);
