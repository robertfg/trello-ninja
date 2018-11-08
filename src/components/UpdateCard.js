/*
  GET:    https://api.trello.com/1/lists/${config.db.list}/cards?key=${config.db.key}&token=${config.db.token}
  POST:   https://api.trello.com/1/cards?key=${config.db.key}&token=${config.db.token}&idList=${config.db.list}&name=${NEWNAME}
  PUT:    https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}&name=${NEWNAME}
  DELETE: https://api.trello.com/1/cards/${CARDID}?key=${config.db.key}&token=${config.db.token}
*/

/* **********  IMPORTS  ********** */
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input }     from 'reactstrap';

/* **********  REQUIREMENTS  ********** */
const config = require('../config');


// onSearchChange = e => this.setState({name: e.target.value});

/* **********  PLAYGROUND COMPONENT  ********** */
const UpdateCard = ( { match } ) => {

  let id    = match.params.id;
  let name  = match.params.name;
  let desc  = match.params.desc;

  // handleSumbit = async(e) => {
  //   // Don't allow form to do a real submission on submit.
  //   e.preventDefault();
  //
  //   const id   = selectedCard.id;
  //   const name = selectedCard.name;
  //   const url  = `https://api.trello.com/1/cards/${id}?key=${config.db.key}&token=${config.db.token}&name=${name}&desc=${desc}`;
  //   const obj  = {
  //     method:   'PUT',
  //     headers:  { 'Content-Type': 'application/json' }
  //   }
  //
  //   const res   = await fetch(url, obj);
  //   const json  = await res.json();
  // }

  // Return result
  return (
    // <Form onSubmit = { this.handleSumbit } >
    <Form>
      <legend>Card Details</legend>
      <FormGroup>
        <Label for="cardName">Name:</Label>
        <Input type="text" name="cardName" id="cardName" value={name} />
        {/*<Input type="text" name="cardName" id="cardName" value={name} onChange={this.onSearchChange} />*/}
      </FormGroup>
      <FormGroup>
        <Label for="cardDesc">Description:</Label>
        <Input type="text" name="cardDesc" id="cardDesc" value={desc} />
        {/*<Input type="text" name="cardDesc" id="cardDesc" value={desc} onChange={this.onSearchChange} />*/}
      </FormGroup>
      <Button color="primary" type="submit">Update</Button>
    </Form>
  );
}

export default UpdateCard;
