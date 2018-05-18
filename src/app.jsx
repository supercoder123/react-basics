const contentNode = document.getElementById('contents');
const bb = document.getElementById('bb');
const newbb = <h1>hello how are you? </h1>
const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ');
const component = <p>{message}</p>; // A simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the  content Node
ReactDOM.render(newbb, bb); // Render the component inside the  content Node