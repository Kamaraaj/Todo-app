import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { model } from './models/models';
import TodoList from './components/TodoList/TodoList';

const App:React.FC=()=> {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<model[]>([]);
   
  //Form value set into the todos on form submission  
  const handleInputFieldSumbission = (e: React.FormEvent)=>{
    e.preventDefault();
    let todoText = todo
    todoText = todoText.trim()
    if (todoText){
      setTodos((prev)=>{
        return[...prev,{id:Date.now(),todo:todoText,isDone:false}]
      })
    }
    setTodo("");
  }
  return (
    <div className="App">
      <header>
      <h1 className="header-title">Taskify</h1>
      </header>
      <main className='content-area'>
      <InputField todo={todo} setTodo={setTodo} handleInputFieldSumbission={handleInputFieldSumbission} />
      <TodoList todos={todos} setTodos={setTodos}/>
      </main>
    </div>
  );
}

export default App;
