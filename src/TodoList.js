import './TodoList.css';
import {Component} from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = {
      todos : [{description : 'Do the dishes', id : ''}, {description : 'Have a walk', id : ''}]
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
                <Todo descr = {todo.description} />
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
