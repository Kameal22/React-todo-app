import './TodoList.css';
import {Component} from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = {
      todos : [{description : 'Do the dishes', id : uuidv4()}, {description : 'Have a walk', id : uuidv4()}]
    }
  }

  addTodo = (newTodo) =>{
    this.setState(state =>({
      todos : [...state.todos, newTodo]
    }))
  } 
  
  render(){
    console.log(this.state.todos[0].id)
    return(
      <div className = "mainTodoDiv">

        <div className = "test">

          <h1>Todo app!</h1>

        </div>

        <div className = "todoListDiv">

          <ul>

            {this.state.todos.map(todo =>{
              return(
                <div className = "todoDiv" key = {uuidv4()}> 

                  <Todo descr = {todo.description} key = {this.id}/>

                  <div className = "iconsDiv">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>

                  </div>

                </div>
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
