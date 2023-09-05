import React from 'react'
import './Todo.css'
import {FaPlusCircle} from 'react-icons/fa'
import {useState, useRef} from 'react'
import Todos_wrapper from './Todos_wrapper'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null); // Create a ref for the input element
  const addTodo = () => {
      const todo = {
          id: Math.floor(Math.random()*1000),
          text: input
      }
      setTodos([todo, ...todos]);
      setInput('');
      inputRef.current.focus(); // Focus the input field after adding a todo ref={inputRef}
  }
  return (
    <div>
        <form className='form-todo'>    
            <input type='text' ref={inputRef} value={input} className='form-control' onChange={(e) => setInput(e.target.value)} placeholder='Enter Your Todo' name='text'/>
            <button type='button' className='btn' onClick={() => addTodo()}><FaPlusCircle className='icon'/></button>
        </form>
        {/*pass the todos array as a prop to Todos_wrapper*/}
        <Todos_wrapper todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Todo