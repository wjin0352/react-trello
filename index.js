var React = require('react');
var ReactDOM = require('react-dom');

//  create three components for constructing a Trello-style interface.
// The Board component should consist of a number of List components,
// and the List component should contain a number of Cards.

var List = function(props) {
  return (
    <div className="list">
      <li>{props.item}</li>
    </div>
  )
}

var Card = function(props) {

  return (
    <li>card</li>
  )
}

var Board = function(props) {
  var title = 'first board';
  var list = [];

  var listArray = props.lists.split(" ");
  // for(var i = 0; i < listArray.length; i++) {
  //   list.push(<List item={listArray[i]}/>);
  // }
  var results = listArray.map(function(item) {
    return <li>{item}</li>;
  })
  console.log(results[0].props.children);

  return (
    <container>
      <div className="board">
        {props.title}
      </div>
      <div className="lists">
        <List item={results}/>
      </div>
    </container>
  );
}




document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board title="board #1" lists="feature1 feature2 feat3 tests notes" cards="write css, prepare mongo database, setup npm scripts"/>, document.getElementById('app'));
});
