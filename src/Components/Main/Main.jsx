import './Main.css';
import { useState , useEffect} from 'react';

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

  //Search filter
  const [searchTerm, setSearchTerm] = useState('');
  let [filteredTodos, setFilteredTodos] = useState(todos);


  //handle checked tasks

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

  //handle filter with the three option All , Active and Completed
  const handleFilter = (value) => {
    setFilter(value);
  }

  // handle clear completed tasks 

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.checked);
    setTodos(updatedTodos);
  }


  //let filteredTodos = todos;
  if (filter === 'Active') {
    filteredTodos = todos.filter(todo => !todo.checked);
  } else if (filter === 'Completed') {
    filteredTodos = todos.filter(todo => todo.checked);
  }

  //handle delete tasks
  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  //Search
  const handleSearch = (value) => {
    const searchTerm = value.trim();
    setSearchTerm(searchTerm);
  };
  //use effect to execute the block of code when ever we have a change in todos or seearchTerm
  useEffect(() => {
    const filteredList = todos.filter(todo => {
      const task = todo.task ?? '';
      return task && task.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredTodos(filteredList);
  }, [todos, searchTerm]);
  
  
  
  


    return (
          <main className="main d-flex justify-content-center">
            <div className="col-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search tasks..."
                  aria-label="Search tasks"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <ul>
                {filteredTodos.map((todo) => (
                  <li key={todo.id} className="d-flex justify-content-between align-items-center">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input custom-checkbox"
                        id="exampleCheckbox"
                        value="option1"
                        type="radio"
                        checked={todo.checked}
                        onChange={() => handleCheck(todo.id)}
                      />
                      <span className={todo.checked ? 'strike-through' : ''}>{todo.task}</span>
                    </div>
                    <i onClick={() => handleDelete(todo.id)} className="delete-icon bi bi-x-circle"></i>
                  </li>
                ))}

                <div class="container">
                  <li class="d-flex flex-wrap justify-content-between align-items-center">
                    <div class="col-sm-12 col-md-3 mb-3 mb-md-0">
                      <p class="text-white mb-0">{uncheckedLenght} items left</p>
                    </div>

                    <div class="col-sm-12 col-md-6">
                      <div class="btn-group w-100" role="group" aria-label="Basic example">
                        <button type="button" onClick={() => handleFilter('All')} class="btn text-white flex-fill">All</button>
                        <button type="button" onClick={() => handleFilter('Active')} class="btn text-white flex-fill">Active</button>
                        <button type="button" onClick={() => handleFilter('Completed')} class="btn text-white flex-fill">Completed</button>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-3 mt-3 mt-md-0">
                      <button type="button" onClick={handleClearCompleted} class="btn text-white w-100">Clear Completed</button>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </main>
    );
  } 