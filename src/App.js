import React, {Component} from 'react'
import './App.css'
import MainContainer from './components/MainContainer';
import SearchForm from './components/SearchForm';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(res => this.setState({
        characters: res.results
      }))
  }

  render(){
    return(
      <div className='App'>
        <h1>Welcome to the ultimate fan site!</h1>
        <SearchForm onSearch = {this.performSearch} />
        <MainContainer characters={this.state.characters}/>
        
      </div>
    )
  }
}