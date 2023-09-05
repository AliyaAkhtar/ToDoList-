import React from 'react'
import './Todos_wrapper.css'
import {SiProgress} from 'react-icons/si'
import {FaTrash} from 'react-icons/fa'
import {FaCheckDouble} from 'react-icons/fa'
import { useState, useEffect} from 'react'

const Todos_wrapper = ({todos, setTodos}) => {
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const addToProgress = (id) => {
    const item = todos.find(x => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter(x => x.id !==id);
    setTodos(filterarray);
  } 
  const deleteTodo = (id) => {
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  } 
  const addtoCompleted = (id) => {
    const item = inprogress.find(x => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter(x => x.id !== id);
    setInprogress(filterarray);
  }
  useEffect(() => {

  }, [todos, inprogress])
  return (
    <div className='todos-wrapper'>
        <div className='todos-list'>
            <h3 className='todo-title'>Todos List</h3>
            {todos && todos.length > 0 ? (
                todos.map((item, index) => (
                    <div className='todo-card' key={item.id}>
                        <p className='card-text'>{item.text}</p>
                        <SiProgress onClick={() => addToProgress(item.id)} className='icon-progress-todo'/>
                        <FaTrash onClick={() => deleteTodo(item.id)} className='icon-trash-todo'/>
                    </div>
                ))) : (<p>No Todos Available</p>)}
        </div>
        <div className='todos-list'>
            <h3 className='todo-title'>In Progress</h3>
            {inprogress && inprogress.length > 0 ? (
                inprogress.map((item, index) => ( 
                    <div className='progress-card' key={item.id}>
                        <p className='card-text'>{item.text}</p>
                        <FaCheckDouble onClick={() => addtoCompleted(item.id)} className='icon-check-todo'/>
                    </div>
                ))) : (<p>No Todos in Progress</p>)}
        </div>
        <div className='todos-list'>
            <h3 className='todo-title'>Completed</h3>
            {completed && completed.length > 0 ? (
                completed.map((item, index) => (
                    <div className='completed-card' key={item.id}>
                        <p className='card-text'>{item.text}</p>
                    </div>
                ))) : (<p>No Todos Completed</p>)}    
        </div>
    </div>
  )
}

export default Todos_wrapper