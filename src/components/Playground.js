/*
  GET:    https://api.trello.com/1/lists/${config.db.list}/cards?key=${config.db.key}&token=${config.db.token}
  POST:   https://api.trello.com/1/cards?key=${config.db.key}&token=${config.db.token}&idList=${config.db.list}&name=${NEWNAME}
  PUT:    https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}&name=${NEWNAME}
  DELETE: https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}
*/

/* **********  IMPORTS  ********** */
import
  React, {
  Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonGroup } from 'reactstrap';


/* **********  REQUIREMENTS  ********** */
const config = require('../config');


/* **********  PLAYGROUND COMPONENT  ********** */
class Playground extends Component {
  // constructor
  constructor() {
    super()
    this.state = {
      trelloCards: [],
      search: "",
      selectedCard: null
    }
  }

  // Methods
  async getCards() {
    const res   = await fetch(`https://api.trello.com/1/lists/${config.db.list}/cards?key=${config.db.key}&token=${config.db.token}`);
    const json  = await res.json();
    this.setState({trelloCards: json})
  }



  render() {
    this.getCards();
    let results = this.state.trelloCards;

    return (
      <div className="Playground">
        {results.map(result =>
          <Card key={ result.id }>
            <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBody>
              <CardTitle>{ result.name }</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <div>
                <Button color="primary">Update</Button>{' '}
                <Button color="danger" >Delete</Button>
              </div>
            </CardBody>
          </Card>
        )};
      </div>
    );
  }
}

export default Playground;
