import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`name ${task.completed ? 'completed' : ''}`}> {task.task}</p> 
      <div className='icon'>
        < FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        < FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
      </div>
  )
}