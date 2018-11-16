/* **********  IMPORTS  ********** */
import
  React, {
  Component } from 'react';
import {
  Jumbotron } from 'reactstrap';


/* **********  HOME COMPONENT  ********** */
class Home extends Component {

  render() {
    return (
      <div className="main-content">
        <Jumbotron className="jumbo">
          <h1 className="display-3">Trello Ninja</h1>
          <p className="lead">Front End Framework Project</p>
          <hr className="my-2 main-content__hr" />
          <p>
            This project lists all of the existing cards in the "Front End Framework Project" Trello board's "To Do" list.
            Using the <strong>Playground</strong> link, You will be able to add, update, and delete cards from this list.</p>
          <p>See the live Trello board and list here:</p>
          <p className="lead main-content__link">
            <a href="https://trello.com/b/aCoR1syx" target="_blank" rel="noopener noreferrer">Trello Board</a>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
