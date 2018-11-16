/* **********  IMPORTS  ********** */
import
  React,
  { Component }           from 'react';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label   }                 from 'reactstrap';
// import
//   ReactCSSTransitionGroup from 'react-addons-css-transition-group';


/* **********  REQUIREMENTS  ********** */
const config = require('../config');


/* **********  PLAYGROUND COMPONENT  ********** */
class UpdateList extends Component {

  // Contructor
  constructor ( { match } ) {
    super();
    console.log('match: ', match);

    this.id    = match.params.id;
    this.name  = match.params.name;
    this.desc  = match.params.desc;

    console.log(this.id);
    console.log(this.name);
    console.log(this.desc);
    console.log(arguments);
    console.log(arguments.length);

    if ( match.params ) {
      this.buttonLabel = 'Update Card';
    } else {
      this.buttonLabel = 'Add Card';
    }
  }

  handleSubmit = async(e) => {
    // Don't allow form to do a real submission on submit.
    e.preventDefault();

    let name = this.cardName.value;
    let desc = this.cardDesc.value;

    // Validate
    if ( name === ''  ||
         desc === '' ) {
      alert("You must complete all fields!");
      return;
      }

    // PUT/POST
    let method;
    let url = `https://api.trello.com/1/cards`;

    if ( this.id ) {
      method = 'PUT';
      url = url + `/${this.id}?`;
    } else {
      method = 'POST';
      url = url + `?idList=${config.db.list}&`;
    }

    url = url + `key=${config.db.key}&token=${config.db.token}&name=${name}&desc=${desc}`;
    const obj = {
      method:   method,
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
      <Container>
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
          <Button color="primary" type="submit">{this.buttonLabel}</Button>
        </Form>
      </Container>
    );
  }
}


/* **********  EXPORTS  ********** */
export default UpdateList;
