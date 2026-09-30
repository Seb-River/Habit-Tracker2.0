import React from 'react'
import { useState } from 'react'

function TodoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, {text: inputValue, date: new Date().toLocaleString()}]) /* This inputs the habit and the current date*/
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <div>
      <h1>Habit Tracker</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Habit</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text} - {todo.date}
          <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default TodoList;