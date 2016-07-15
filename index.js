var React = require('react');
var ReactDOM = require('react-dom');

//  create three components for constructing a Trello-style interface.
// The Board component should consist of a number of List components,
// and the List component should contain a number of Cards.



var Board = function(props) {
  // A title prop which contains the title of the board
  var title = props.title;
  // A lists prop which contains an array of the titles of the board's lists

  return (

  )
}

// Test this out by rendering a board which contains multiple lists, and a list which contains multiple cards.
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board title="board#1" getLists="list#1"/>, document.getElementById('app'));
});
