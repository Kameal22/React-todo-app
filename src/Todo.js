import './Todo.css';
import {Component} from 'react'

class Todo extends Component{

  constructor(props){
    super(props)
    this.state = {
      isDone : false
    }
  }

  crossOut = () =>{
    this.setState({
      isDone : true
    })
  }

  undo = () =>{
    this.setState({
      isDone : false
    })
  }

  render(){
    return(
      <li
      className = {this.state.isDone ? 'doneTodo' : 'todo'}
      onClick = {this.state.isDone ? this.undo : this.crossOut}>
      {this.props.descr}
      </li>
    )
  }
}

export default Todo;
