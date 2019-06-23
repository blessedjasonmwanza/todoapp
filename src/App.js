import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/todo-card.css';
import ToDoCard from './components/todo-card';

const todos = [
  {
    "id": '1234',
    "title": 'Install Node Js',
    "date": '20-06-2019',
    "isDone": false,
    "activities":[{ 
      id: '1234_1',
      name: 'Visit NodeJs site',
      isDone: false
    }]
  },
  {
    "id": '34234',
    "title": 'Install React',
    "isDone": true,
    "activities":[{ 
      id: '1234_1',
      name: 'Visit NodeJs site',
      isDone: true
    }]
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-menu">
          <a href="#" >Pending</a>
          <a href="#">Completed</a>
        </nav>
      </header>
      <main>
        {/* display to do's */}
        <section className="list-todos">
        
        {
          todos.map(todo => {
            return(<ToDoCard id = {todo.id} title = {todo.title} date={todo.date} isDone={todo.isDone} />);
          })
        }
        </section>
        {/* add a new task */}
        <section>
          <input className="new-task" placeholder="Add new Task"/>
          <button className="addTodo">Add Task</button>
        </section>
      </main>
    </div>
  );
}

export default App;
