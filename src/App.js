import './App.css';
import React,{useState,useEffect} from "react"
import Form from "./components/Form.js"
import TodoList from "./components/TodoList.js"
function App() {
  const [inputText,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all")
  const [filteredTodos,setFilterTodos]=useState([])
  const filterHandler=()=>{
    switch(status){
      case "completed": setFilterTodos(todos.filter(todo =>todo.completed===true))
      break
      case "uncompleted" : setFilterTodos(todos.filter(todo=>todo.completed===false))
      break
      default : setFilterTodos(todos)
      break
    }
  }
  const saveToLocal=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  const getFromLocal=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify("[]"))
    }
    else{
      const localStore=JSON.parse(localStorage.getItem("todos"))
      setTodos(localStore)
    }
  }
  useEffect(()=>{
    getFromLocal()
  },[])
  useEffect(()=>{
    filterHandler()
    saveToLocal()
  },[todos,status])
  return (
    <div className="App">
      <header>
        My To-Do List
      </header>
      <Form inputText={inputText} setInput={setInput} todos={todos} setTodos={setTodos} setStatus={setStatus} status={status}/>
      <TodoList todos={todos} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
