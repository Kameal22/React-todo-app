import './TodoList.css';
import {Component} from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = {
      todos : ['Do the dishes', 'Have a walk']
    }
  }

  addTodo = (newTodo) =>{
    this.setState(state =>({
      todos : [...state.todos, newTodo]
    }))
  } 
  
  render(){
    return(
      <div className = "mainTodoDiv">

        <div className = "test">

        <h1>Todo app!</h1>

        </div>

        <div className = "todoListDiv">

          <ul>

            {this.state.todos.map(todo =>{
              return(
                <Todo descr = {todo} />
              )
            })}

          </ul>

        </div>

        <AddTodo addTodo = {this.addTodo}/>

      </div>
    )
  }
}

export default TodoList;
