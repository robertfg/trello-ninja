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


/* **********  PLAYGROUND COMPONENT  ********** */
// const UpdateCard = ( { match } ) => {
class UpdateCard extends Component {

  // let id    = match.params.id;
  // let name  = match.params.name;
  // let desc  = match.params.desc;


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
  render() {
    return (
      <Form onSubmit = { this.handleSumbit } >
        <legend>Card Details</legend>
        <FormGroup>
          <Label for="cardName">Name:</Label>
          <Input type="text" name="cardName" id="cardName" value={name} />
        </FormGroup>
        <FormGroup>
          <Label for="cardDesc">Description:</Label>
          <Input type="text" name="cardDesc" id="cardDesc" value={desc} />
        </FormGroup>
        <Button color="primary" type="submit">Update</Button>
      </Form>
    );
  }
}

export default UpdateCard;
