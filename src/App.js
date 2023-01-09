import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1>Monsters Reloadex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {filteredMonsters.length === 0 ? (
          <h1>No Result found for {this.state.searchField}</h1>
        ) : (
          <CardList monsters={filteredMonsters}></CardList>
        )}
      </div>
    );
  }
}

export default App;
