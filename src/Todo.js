import './Todo.css';
import {Component} from 'react'

class Todo extends Component{

  constructor(props){
    super(props)
    this.state = {
      isDone : false
    }
  }

  toggleTodo = () =>{
    this.setState({
      isDone : !this.state.isDone
    })
  }

  render(){
    return(
      <li
      className = {this.state.isDone ? 'doneTodo' : 'todo'}
      onClick = {this.toggleTodo}>
      {this.props.descr}
      </li>
    )
  }
}

export default Todo;
