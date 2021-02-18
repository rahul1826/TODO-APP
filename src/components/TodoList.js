import React from "react"
import Todo from "./Todo.js"
const TodoList = (props) =>{
    return(
    <div className="todo-container">
      <ul className="todo-list">
          {props.filteredTodos.map((todo) =>(
              <Todo text={todo.text} key={todo.id} todos={props.todos} setTodos={props.setTodos} todo={todo}/>
          ))}
      </ul>
    </div>
    )
}
export default TodoList