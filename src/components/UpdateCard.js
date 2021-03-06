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
class UpdateCard extends Component {

  // Contructor
  constructor ( { match } ) {
    super();
    this.id    = match.params.id;
    this.name  = match.params.name;
    this.desc  = match.params.desc;
  }

  handleSubmit = async(e) => {
    // Don't allow form to do a real submission on submit.
    e.preventDefault();

    this.name  = this.cardName.value;
    this.desc  = this.cardDesc.value;

    const url  = `https://api.trello.com/1/cards/${this.id}?key=${config.db.key}&token=${config.db.token}&name=${this.name}&desc=${this.desc}`;
    const obj  = {
      method:   'PUT',
      headers:  { 'Content-Type': 'application/json' }
    }

    // Update
    await fetch(url, obj)
      .catch(error => console.error("Unable to update the user.", error));

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
          <Input id ="cardName" type="text" defaultValue={this.name} innerRef={ ( input ) => this.cardName = input } />
        </FormGroup>
        <FormGroup>
          <Label for="cardDesc">Description:</Label>
          <Input id ="cardDesc" type="text" defaultValue={this.desc} innerRef={ ( input ) => this.cardDesc = input } />
        </FormGroup>
        <Button color="primary" type="submit">Update Card</Button>
      </Form>
    );
  }
}


/* **********  EXPORTS  ********** */
export default UpdateCard;
