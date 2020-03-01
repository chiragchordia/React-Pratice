import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'chirag' , age: 25 },
      { name: 'kishor' , age: 24 },
      { name: 'shubham', age: 26 }
    ],
    showPerson: false  
  }

  switchNameHandler = (newName, secName) => {
    // console.log('hello world');
    // Dont do this: this.state.persons[0].name = 'Jain';
    this.setState({
      persons: [
        { name: newName , age: 25 },
        { name: secName , age: 24 },
        { name: 'Surana', age: 26 }
      ],     
    })
  }

  changesNameHandler = (event) => {
    // console.log('hello world');
    // Dont do this: this.state.persons[0].name = 'Jain';
    this.setState({
      persons: [
        { name: 'CHIRAG' , age: 25 },
        { name: event.target.value , age: 24 },
        { name: 'SHUBHAM', age: 26 }
      ] 
    })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
 
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',      
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>        
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Kishor', 'Bohara')} />

          <Person name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Shubham', 'Surana')}
            changed={this.changesNameHandler} >
            My Hobbies: Coading
          </Person>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>
            She's beautiful girl.
          </Person>          
        </div> 
      );
    }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is a sample file.</p>
        <button style={style} onClick={this.toggleHandler }>Click Here</button> 
        {persons}
          
      </div>    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world'));
  }
}

export default App;
