import React, { Component } from 'react';

// import './App.css';

const config = require('./config');

// App components
class App extends Component {
  // constructor
  constructor() {
    super()
    this.state = {
      trelloCards: [],
      search: "",
      selectedCard: null
    }
  }

  // methods
  async componentDidMount() {
    const res   = await fetch(`https://api.trello.com/1/boards/${config.db.board}/lists?key=${config.db.key}&token=${config.db.token}`);
    const json  = await res.json();
    this.setState({trelloCards: json.results})
  }

  onSearchChange = event => {
    this.setState({search: event.target.value})
  }

  generateSearchResults = search => {
    if (search === "") {
      return []
    } else {
      return this.state.trelloCards
        .filter(p => p.name.includes(search))
        .slice(0, 10)
    }
  }

  selectTrelloCards = async (name) => {
    const res =
      await fetch(
        `https://api.trello.com/1/lists/${config.db.board}/cards?key=${config.db.key}&token=${config.db.token}`,
        // `https://api.trello.com/1/boards/${config.db.board}/lists?key=${config.db.key}&token=${config.db.token}`,
        { cache: "force-cache" }
      );

    const json = await res.json();
    this.setState( { selectedTrelloCard: json, search: name } );
  }

  render() {
    const results = this.generateSearchResults(this.state.search)

    return (
      <div className="App">

        <div className="search">
          <input
            onChange={this.onSearchChange}
            type="text"
            value={this.state.search}/>
          <ul>
            { results.map(r =>
              <li onClick={() => this.selectTrelloCards(r.name)}>
                {r.name}
              </li>
            ) }
          </ul>
        </div>

        { this.state.selectedTrelloCard &&
          <div className="result">
            <img src={this.state.selectedTrelloCard.sprites.back_default} alt=""/>
          </div>
        }

      </div>
    );
  }
}

export default App;
