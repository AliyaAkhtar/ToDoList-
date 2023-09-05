import React from 'react'
import './Title.css'
import Todo from './Todo'
import Todos_wrapper from './Todos_wrapper'

const Title = () => {
  return (
    <div className='container'>
        <h3 className='title'>ToDo List</h3>
        <Todo/>
        <Todos_wrapper/>
    </div>

  )
}

export default Title