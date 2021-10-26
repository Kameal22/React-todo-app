import './Todo.css';
import {Component} from 'react'

class Todo extends Component{
  render(){
    return(
      <li className = "todo">{this.props.descr}</li>
    )
  }
}

export default Todo;
