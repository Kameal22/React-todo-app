import './AddTodo.css';
import {Component} from 'react';

class AddTodo extends Component{

  constructor(props){
    super(props)
    this.state = {
      todo : ''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.todo !== ''){
    this.props.addTodo(this.state.todo)
    }
    this.setState({
      todo : ''
    })
  }

  handleChange = (e) =>{
    this.setState({
      todo : e.target.value
    })
  }

  render(){
    return(
      <div className = "formDiv">

        <form onSubmit = {this.handleSubmit}>

          <label htmlFor = "todo"></label>

          <input
          type = {Text}
          name = 'todo'
          id = 'todo'
          value = {this.state.todo}
          onChange = {this.handleChange}
          >
          
          </input>

        </form>

      </div>
    )
  }
}

export default AddTodo;
