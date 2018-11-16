/* **********  IMPORTS  ********** */
import
  React,
  { Component } from 'react';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input }       from 'reactstrap';


/* **********  REQUIREMENTS  ********** */
const config = require('../config');


/* **********  PLAYGROUND COMPONENT  ********** */
class UpdateList extends Component {

  // Contructor
  constructor ( { match } ) {
    super();
    this.id    = match.params.id;
    this.name  = match.params.name;
    this.desc  = match.params.desc;

    if ( Object.keys(match.params).length !== 0 ) {
      this.buttonLabel = 'Update Card';
    } else {
      this.buttonLabel = 'Add Card';
    }
  }

  handleSubmit = async(e) => {
    // Don't allow form to do a real submission on submit.
    e.preventDefault();

    this.name  = this.cardName.value;
    this.desc  = this.cardDesc.value;

    // Validate
    if ( this.name === ''  ||
         this.desc === '' ) {
      alert("You must complete all fields!");
      return;
      }

      // PUT/POST
      let method, errorMsg;
      let url = `https://api.trello.com/1/cards`;

      if ( this.id ) {
        method = 'PUT';
        url = url + `/${this.id}?`;
        errorMsg = "Unable to update the user."
      } else {
        method = 'POST';
        url = url + `?idList=${config.db.list}&`;
        errorMsg = "Unable to add the user."
      }

      url = url + `key=${config.db.key}&token=${config.db.token}&name=${this.name}&desc=${this.desc}`;
      const obj = {
        method:   method,
        headers:  { 'Content-Type': 'application/json' }
      }

    // Update
    await fetch(url, obj)
      .catch(error => console.error(errorMsg, error));

    // Push the path to the history stack.
    this.props.history.push('/playground');
  }

  // Return result
  render() {
    return (
      <Container className="main-content">
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
          <Button color="primary" type="submit">{this.buttonLabel}</Button>
        </Form>
      </Container>
    );
  }
}


/* **********  EXPORTS  ********** */
export default UpdateList;
