import React, { useState, useEffect } from "react";
import { Component } from 'react';
import SearchCharacters from './SearchCharacters'
import ReactSearchBox from 'react-search-box'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = '') => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.results,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    return (
      <ReactSearchBox
        placeholder="Search"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }
}
