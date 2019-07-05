import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/todo-card.css';
import ToDoCard from './components/todo-card';


if(navigator.onLine){
  // only fetch data when internet is active
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const results = JSON.stringify(myJson);
    const listArea = document.querySelector("#list-todos");
    if(results.length > 10){
      for (let i = 0; i < 10; i++) {       
        const todo = myJson[i];
        let id = todo.id;
        let title = todo.title;
        let isDone = todo.completed;
        listArea.innerHTML = <ToDoCard  id={id} title = {title}  isDone = {isDone}/>;
        
      }

    }else{
      console.log('You don\'t have any task added to your to do list yet.' );
    }
  })
}



function AddNewToDo(){
  let taskName = document.getElementById("new-task").value;
  console.log(taskName);
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-menu">
          <a href="#">To Do G3</a>
        </nav>
      </header>
      <main>
        {/* display to do's */}

        <section className="list-todos" id="list-todos">
       
        
        </section>
        {/* add a new task */}
        <section>
          <input className="new-task" placeholder="Add new Task" id="new-task"/>
          <button className="addTodo" onClick={AddNewToDo}>Add Task</button>
        </section>
      </main>
    </div>
  );
}

export default App;
