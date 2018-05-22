const contentNode = document.getElementById('contents');
const bb = document.getElementById('bb');
const newbb = <h1>hello how are you? </h1>
const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ');
const component = <p>{message}</p>; // A simple JSX component
//ReactDOM.render(component, contentNode); // Render the component inside the  content Node
//ReactDOM.render(newbb, bb); // Render the component inside the  content Node


class IssueFilter extends React.Component {
  render() {
      return (
        <div>This is a placeholder for the Issue Filter.</div>
      )
    }
}
class IssueTable extends React.Component {
  render() {
      return (
        <div>This is a placeholder for a table of Issues.</div>
      )
    }
}

class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for an Issue Add entry form.</div>
    )
  }
}

class IssueList extends React.Component{
  render(){
    return(
      <div>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable />
      <hr />
      <IssueAdd />
      </div>
    );
  }
}
ReactDOM.render(<IssueList/>,contentNode);
