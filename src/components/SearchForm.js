import React from "react";
import { Component } from "react"

import CharacterList from "./CharacterList"

import axios from 'axios';

class Search extends Component {
  state = {
    characters: null,
    loading: false,
    value: []
  }


  search = async val => {
    this.setState({ loading: true });
    const res = await axios('https://rickandmortyapi.com/api/character/')
    const characters = await res.data.results;

    this.setState({ characters, loading: false});
  }
    

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderCharacterCard() {
    let charCard = <h1>Find A Character</h1>;
    if (this.state.charCard) {
      charCard = <CharacterList list={this.state.charCard} />;
    }

    return charCard;

  }



  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.characters}
      </div>
    );
  }
}

export default Search