import './AddTodo.css';
import {Component} from 'react';


class AddTodo extends Component{

  constructor(props){
    super(props)
    this.state = {
      description : ''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.description !== ''){
    this.props.addTodo(this.state)
    }
    this.setState({
      description : ''
    })
  }

  handleChange = (e) =>{
    this.setState({
      description : e.target.value
    })
  }

  render(){
    return(
      <div className = "formDiv">

        <form onSubmit = {this.handleSubmit}>

          <label htmlFor = "todo"></label>

          <input
          type = 'text'
          name = 'todo'
          id = 'todo'
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
