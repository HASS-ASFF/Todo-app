import './Main.css';
import { useState } from 'react';

export default function Main() {
  
  const [todos, setTodos] = useState([{
    id: 0,
    task: 'Jog arround the park 1x',
    checked: false,
  }, {
    id: 1,
    task: 'Jog arround the park 2x',
    checked: false,
  }, {
    id: 2,
    task: 'Jog arround the park 3x',
    checked: false,
  }, {
    id: 3,
    task: 'Jog arround the park 4x',
    checked: false,
  }, {
    id: 4,
    task: 'Jog arround the park 5x',
    checked: false,
  }]);
  const [filter, setFilter] = useState('All');

  const uncheckTodo = todos.filter(item => !item.checked);
  const uncheckedLenght = uncheckTodo.length;



  const handleCheck = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  const handleFilter = (value) => {
    setFilter(value);
  }

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.checked);
    setTodos(updatedTodos);
  }

  let filteredTodos = todos;
  if (filter === 'Active') {
    filteredTodos = todos.filter(todo => !todo.checked);
  } else if (filter === 'Completed') {
    filteredTodos = todos.filter(todo => todo.checked);
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

//   const data = ListTodo.map(item=>      
//   <li key={item.id} className="d-flex justify-content-between align-items-center">
//   <div className="form-check form-check-inline">
//     <input className="form-check-input custom-checkbox" type="radio" id="exampleCheckbox" value="option1"/>
//     <label className="form-check-label" for="exampleCheckbox">{item.task}</label>
//   </div>
//   <i className="delete-icon bi bi-x-circle"></i>
// </li>
// );

    return (
        <main className="main d-flex justify-content-center">
        <div className="col-6">
         <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id} className="d-flex justify-content-between align-items-center">
          <div className="form-check form-check-inline">
            <input
            className="form-check-input custom-checkbox"
            id="exampleCheckbox" value="option1"
              type="radio"
              checked={todo.checked}
              onChange={() => handleCheck(todo.id)}
            />
            <span className={todo.checked ? 'strike-through' : ''}>{todo.task}</span>
            </div>
          <i 
          onClick={() => handleDelete(todo.id)}
          className="delete-icon bi bi-x-circle"
          ></i>
        </li>
      ))}
            <li className="d-flex main-footer justify-content-between align-items-center">
              <p className="text-white">{uncheckedLenght} items left</p>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={() => handleFilter('All')} className="btn text-white">All</button>
                <button type="button" onClick={() => handleFilter('Active')} className="btn text-white">Active</button>
                <button type="button" onClick={() => handleFilter('Completed')} className="btn text-white">Completed</button>
              </div>
              <button type="button" onClick={handleClearCompleted} className="btn text-white">Clear Completed</button>
            </li>
      
         </ul>
        </div>
      </main>
    );
  } 