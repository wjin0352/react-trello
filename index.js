var React = require('react');
var ReactDOM = require('react-dom');

//  create three components for constructing a Trello-style interface.
// The Board component should consist of a number of List components,
// and the List component should contain a number of Cards.

var Board = function() {
  var title = 'first board';
  return (
    <div className="board">
      {title}
    </div>
  );
}


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board/>, document.getElementById('app'));
});
