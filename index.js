var React = require('react');
var ReactDOM = require('react-dom');

//  create three components for constructing a Trello-style interface.
// The Board component should consist of a number of List components,
// and the List component should contain a number of Cards.

var Board = function(props) {
  // A title prop which contains the title of the board
  var title = props.title;
  // A lists prop which contains an array of the titles of the board's lists
  var lists = props.lists;
  // console.log(props.title)
  // returns a list container:
  return (
    <div className="board">
      <ListContainer />
    </div>
  )
}

var ListContainer = React.createClass ({
  getInitialState: function() {
    return {
      title: "",
      content: "",
      cards: []
    };
  },
  onAddInputChanged: function(data) {
    this.setState({
      title: data.target.value
    })
  },
  onAddContentChanged: function(data) {
    this.setState({
      content: data.target.value
    })
  },
  onAddClick: function(data) {
    // we can refer this.state.title to just title now with the line below
    var {title, content, cards} = this.state;
    var card = {
      // you can also just refer to below as just title if you want
      title: title,
      content: content
    }
    this.setState({
      // declared in getInitialState
      cards: [card].concat(cards)
      // cards: [card, ...cards]
    })
  },
  render: function() {
    return (
      <List
        inputText={this.state.inputText}
        cards={this.state.cards}
        onAddInputChanged={this.onAddInputChanged}
        onAddContentChanged={this.onAddContentChanged}
        onAddClick={this.onAddClick}
      />
    );
  }
})

var Button = function(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

var Card = function(props) {
  // A text prop which contains the content of the card
  var cardTitle = props.title;
  var content = props.content;
  // returns a card
  return (
    <div className="card">
      <li className="card-title">{props.title}</li>
      <p className="card-content">{props.content}</p>
    </div>
  )
}

var List = function(props) {
  // returns many cards on a list
  var cardElements = props.cards.map(function(card) {
    return <Card title={card.title} content={card.content} key={card.title} />
  })

  return (
    <div className="list">
      {cardElements}
      <div>
        <div>
          <input className="cardTitle" onChange={props.onAddInputChanged}></input>
        </div>
        <div>
          <input className="cardContent" onChange={props.onAddContentChanged}></input>
        </div>
        <Button onClick={props.onAddClick} text="done"/>
      </div>
    </div>
  )
}

// Test this out by rendering a board which contains multiple lists, and a list which contains multiple cards.
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board title="board#1" lists={["list1", "list2", "list3"]}/>, document.getElementById('app'));
});
