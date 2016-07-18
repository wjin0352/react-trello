var React = require('react');
var ReactDOM = require('react-dom');

//  create three components for constructing a Trello-style interface.
// The Board component should consist of a number of List components,
// and the List component should contain a number of Cards.

var Button = function(props) {
  return (
  <button onClick={props.onClick}>{props.text}</button>
  )
}



var Card = function(props) {
  // A text prop which contains the content of the card
  var cardTitle = props.title;
  var content = props.content;

  return (
    <div className="card">
      <li className="card-title">{props.title}</li>
      <p className="card-content">{props.content}</p>
    </div>
  )
}

var List = React.createClass({
  onAddInputChanged: function(data) {
    console.log(data);
  },
  onAddClick: function(data) {
    console.log(data);
  },
  render: function(props) {
    return (
      <div className="list">
        <Card title="card db setup" content="set up the mongo database"/>
        <Card title="card node script setup" content="write npm scripts "/>
        <Card title="card tests" content="write tests in mocha"/>
        <input onChange={this.onAddInputChanged}></input>
        <Button onClick={this.onAddClick} text="some name"/>
      </div>
    )
  }
})

var Board = function(props) {
  // A title prop which contains the title of the board
  var title = props.title;
  // A lists prop which contains an array of the titles of the board's lists
  var lists = props.lists;
  // console.log(props.title)
  return (
    <div className="board">
      <List listTitle={props.lists[0]}/>
      <List listTitle={props.lists[1]}/>
      <List listTitle={props.lists[2]}/>
    </div>
  )
}

// Test this out by rendering a board which contains multiple lists, and a list which contains multiple cards.
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board title="board#1" lists={["list1", "list2", "list3"]}/>, document.getElementById('app'));
});
