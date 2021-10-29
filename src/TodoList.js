import './TodoList.css';
import {Component} from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = {
      todos : [],
      todoLimit : 12,
      isLimited : false
    }
  }
  
  addTodo = (newTodo) =>{

    if(this.state.todos.length !== this.state.todoLimit){

    this.setState(state =>({
      todos : [...state.todos, newTodo]
    }))
    
    }else{
      this.setState({
        isLimited : true
      })
    }
  }

  editTodo = (id, value) =>{
    let editingTodo = this.state.todos.find(todo => todo.id === id)

    const newTodos = this.state.todos.map(todo =>{
      if(todo.id === editingTodo.id){
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
      isLimited : false
    })
  }
  
  render(){
    console.log(this.state.todos.length)
    return(
      <div className = "mainTodoDiv">

        <div className = "test">

          <h1>{this.state.isLimited ? 'Todo limit reached' : 'Todo app!'}</h1>

        </div>

        <div className = "todoListDiv">

          <ul>

            {this.state.todos.map(todo =>{
              return(
                  <Todo descr = {todo.description} key = {todo.id} id = {todo.id} removeTodo = {this.removeTodo}
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
