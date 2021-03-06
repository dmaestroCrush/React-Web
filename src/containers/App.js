import React,{PureComponent} from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "asdf", name: "Max", age: 28 },
        { id: "zxcv", name: "Dev", age: 25 },
        { id: "qwer", name: "Stephanie", age: 22 }
      ],
      otherProperty: null,
      showPersons:false,
      toggleClicked:0
    };
  }
  componentWillMount(){
    console.log(" inside App.js componentWillMount");
  }
  componentDidMount(){
    console.log(' Inside App.js componentDidMount');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[Update App.js] Inside shouldComponentUpdate()",
  //     nextProps,
  //     nextState
  //   );
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons
  //   //return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] Inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] Inside componentDidUpdate()",
      nextProps,
      nextState
    );
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonhandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState,props) =>{
      return {
        showPersons: !doesShow,
        toggleClicked:prevState.toggleClicked +1
      }
    });
    }

  render() {
    console.log('Inside App.js Render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }

  
}

export default withClass(App,classes.App);
