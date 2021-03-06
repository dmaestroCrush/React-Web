import React,{Component} from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props){
    super(props);
    console.log("[Person.js] Inside Constructor",props); 
    this.inputElement=React.createRef();

  }
  componentWillMount(){
    console.log("inside Person.js componentWillMount");
  }
  componentDidMount(){
    console.log("inside Person.js componentDidMount");
    if(this.props.position ===0){
    this.inputElement.current.focus(); 
    }
  }

  focus(){
    this.inputElement.current.focus();
  }
 
  render() {
    console.log('Inside Person.js render()');
    return (
        <Aux>
          <p onClick={this.props.click}>
            I'm {this.props.name} and {this.props.age} years old.
          </p>
          <p>{this.props.children}</p>
          <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
        </Aux>
    )
  }
}

Person.propTypes={
click:PropTypes.func,
name:PropTypes.string,
age:PropTypes.number,
changed:PropTypes.func
};

export default withClass(Person,classes.Person);
//export default Person;