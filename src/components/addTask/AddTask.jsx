import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { todoAdded, selectState } from '../../features/TodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './addTask.css';
const AddTask = () => {
  return (
    <main className="container">
      <div className='add-task-container'>
        <h1 className='add-task'>Add Task</h1>
      </div>
      <div className='flex-container'>
        <InputTask />
        <div className="set-table-height flex-child" >
          <Table />
        </div>
      </div>
      <div>
        <SeeAllTasks />
      </div>
    </main>
  )
}

export default AddTask;

export const SeeAllTasks = () => {
  return (
    <>
      <div>
        <NavLink className='see-all' to='/manage-task'>
          See All
        </NavLink>
      </div>
    </>
  )
}

export const InputTask = () => {
  const [todoValue, setTodoValue] = useState('');
  const onChangeTodoValue = (e) => {
    setTodoValue(e.target.value);
  }

  const dispatch = useDispatch();

  const onSumbitTodoValue = (e) => {
    e.preventDefault();
    dispatch(todoAdded({ id: nanoid(), title: todoValue, completed: false }))
    setTodoValue('');
  }

  return (
    <form className='flex-child'
      onSubmit={onSumbitTodoValue}
    >
      <div>
        <label htmlFor="enter-task">Enter Task</label>
        <input type="text" className='enter-task' id='enter-task' placeholder='Please enter your task...'
          value={todoValue} onChange={onChangeTodoValue}
        />
      </div>
      <div>
        <button type='submit' className='add-btn'>Add</button>
      </div>
    </form>
  )
}

export const Table = () => {
  const todos = useSelector(selectState);
  let num = 0;
  return (
    <table className='table-content'>
      <thead>
        <tr>
          <th>
            No
          </th>
          <th>
            Tasks
          </th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map((todo) => (
            <>
        <tr className='hover-effect-tr' key={todo.id}>
                <td>{++num}</td>
                {
                  todo.completed === false ? <td>{todo.title}</td>
                    : <td style={{ color: "gray", textDecoration: "line-through" }}>{todo.title}</td>
                }
          
        </tr>
            </>
          ))
        }
      </tbody>
    </table>
  )
}
