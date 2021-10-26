import './App.css';
import {Component} from 'react'
import TodoList from './TodoList';

class App extends Component{
  render(){
    return(
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App;
