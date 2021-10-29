import './TodoList.css';
import {Component} from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = {
      todos : []
    }
  }
  
  addTodo = (newTodo) =>{
    this.setState(state =>({
      todos : [...state.todos, newTodo]
    }))
  }

  editTodo = (id, value) =>{

    const newTodos = this.state.todos.map(todo =>{
      if(todo.id === id){
        return {...todo, description : value}
      }
      return todo
    })

    this.setState({
      todos : newTodos
    })
  }

  removeTodo = (id) => {
    this.setState({
      todos : this.state.todos.filter(todo => todo.id !== id),
    })
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
                  <Todo
                   descr = {todo.description}
                    key = {todo.id}
                    id = {todo.id}
                    removeTodo = {this.removeTodo}
                    editTodo = {this.editTodo}/>
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
