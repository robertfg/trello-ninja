/*
  GET:    https://api.trello.com/1/lists/${config.db.list}/cards?key=${config.db.key}&token=${config.db.token}
  POST:   https://api.trello.com/1/cards?key=${config.db.key}&token=${config.db.token}&idList=${config.db.list}&name=${NEWNAME}
  PUT:    https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}&name=${NEWNAME}
  DELETE: https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}
*/

/* **********  IMPORTS  ********** */
import
  React,
  { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input }       from 'reactstrap';

/* **********  REQUIREMENTS  ********** */
const config = require('../config');


/* **********  PLAYGROUND COMPONENT  ********** */
class AddCard extends Component {

  handleSubmit = async(e) => {
    // Don't allow form to do a real submission on submit.
    e.preventDefault();

    let name  = this.cardName.value;
    let desc  = this.cardDesc.value;
    const url = `https://api.trello.com/1/cards?key=${config.db.key}&token=${config.db.token}&idList=${config.db.list}&name=${name}&desc=${desc}`;
    const obj = {
      method:   'POST',
      headers:  { 'Content-Type': 'application/json' }
    }

    // Insert
    await fetch(url, obj)
      .catch(error => console.error("Unable to add the user.", error));

    // Push the path to the history stack.
    this.props.history.push('/playground');
  }

  // Return result
  render() {
    return (
      <Form onSubmit={ this.handleSubmit } >
        <legend>Card Details</legend>
        <FormGroup>
          <Label for="cardName">Name:</Label>
          <Input id ="cardName" type="text" placeholder="Name" innerRef={ ( input ) => this.cardName = input } />
        </FormGroup>
        <FormGroup>
          <Label for="cardDesc">Description:</Label>
          <Input id ="cardDesc" type="text" placeholder="Description" innerRef={ ( input ) => this.cardDesc = input } />
        </FormGroup>
        <Button color="primary" type="submit">Add Card</Button>
      </Form>
    );
  }
}

export default AddCard;
