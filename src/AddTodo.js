import './AddTodo.css';
import {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddTodo extends Component{

  constructor(props){
    super(props)
    this.state = {
      description : '',
      id : ''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.description !== ''){

      // Add error when user tries to add an empty TODO.

    this.props.addTodo(this.state)
    }else{
      alert('no empty todos')
    }
    this.setState({
      description : '',
      id : ''
    })
  }

  handleChange = (e) =>{
    this.setState({
      description : e.target.value,
      id : e.target.id 
    })
  }

  render(){
    return(
      <div className = "formDiv">

        <h2>Add todo</h2>

        <form onSubmit = {this.handleSubmit}>

          <label htmlFor = "todo"></label>

          <input
          type = 'text'
          name = 'todo'
          placeholder = 'add todo'
          id = {uuidv4()}
          value = {this.state.description}
          onChange = {this.handleChange}
          >
          
          </input>

        </form>

      </div>
    )
  }
}

export default AddTodo;
