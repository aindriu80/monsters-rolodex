import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {name: 'Frankenstein',
        id:'asc1'},
        {name: 'Dracula',
      id:'asc2'},
        {name: 'Zombie',
      id:'asc3'}
      ]
    };
  }  


    

render() {
  return (
    
    <header className="App-header">
       
    {
      this.state.monsters.map(monster =><h1 key={monster.id}>{monster.name}</h1>)
    }
    </header>
    
  )};
};

export default App;
