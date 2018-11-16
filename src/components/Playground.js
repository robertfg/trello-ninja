/*
  GET:    https://api.trello.com/1/lists/${config.db.list}/cards?key=${config.db.key}&token=${config.db.token}
  POST:   https://api.trello.com/1/cards?key=${config.db.key}&token=${config.db.token}&idList=${config.db.list}&name=${NEWNAME}
  PUT:    https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}&name=${NEWNAME}
  DELETE: https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}
*/


/* **********  IMPORTS  ********** */
import
  React, {
  Component }             from 'react';
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button }                from 'reactstrap';
// import
//   ReactCSSTransitionGroup from 'react-addons-css-transition-group';


/* **********  REQUIREMENTS  ********** */
const config = require('../config');


/* **********  PLAYGROUND COMPONENT  ********** */
class Playground extends Component {
  // constructor
  constructor() {
    super()
    this.state = {
      trelloCards: [],
      selectedCard: null
    }
  }

  // Methods
  async componentDidMount() {
    const url   = `https://api.trello.com/1/lists/${config.db.list}/cards?key=${config.db.key}&token=${config.db.token}`;
    const res   = await fetch(url);
    const json  = await res.json();
    this.setState({ trelloCards: json });
  }

  updateCard = selectedCard => {
    let id   = selectedCard.id;
    let name = selectedCard.name;
    let desc = selectedCard.desc;
    let path = `playground/${id}/${name}/${desc}`;

    // Push the path to the history stack.
    this.props.history.push(path);
  }

  deleteCard = async (selectedCard) => {
    const id   = selectedCard.id;
    const url  = `https://api.trello.com/1/cards/${id}?key=${config.db.key}&token=${config.db.token}`;
    const obj  = {
      method:   'DELETE',
      headers:  { 'Content-Type': 'application/json' }
    }

    // Deletion
    await fetch(url, obj)
      .catch(error => console.error("Unable to delete the user.", error));

    // Update screen with new array of trelloCards
    this.setState(state => {
      const newTrelloCards = state.trelloCards.filter(trelloCard => trelloCard.id !== selectedCard.id);
      return { trelloCards: newTrelloCards };
    });
  }

  // Render the cards
  render() {
    let results = this.state.trelloCards;

    return (
      <Container className="pg-content">
        {results.map(result =>
          <Card className="card-content" key={ result.id }>
            <CardBody>
              <CardTitle>{ result.name }</CardTitle>
              <CardSubtitle>{ result.desc }</CardSubtitle>
              <hr className="card-content__hr" width="90%"/>
              <CardText>Click the Update button to modify the Name and/or Description, the Delete button to remove.</CardText>
              <div>
                <Button color="primary" onClick={ () => this.updateCard(result) } >Update</Button>{' '}
                <Button color="danger"  onClick={ () => this.deleteCard(result) } >Delete</Button>
              </div>
            </CardBody>
          </Card>
        )}
      </Container>
    );
  }
}


/* **********  EXPORTS  ********** */
export default Playground;
