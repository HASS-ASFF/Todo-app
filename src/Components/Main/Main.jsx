import './Main.css';
import {ListTodo} from '../data';

export default function Main() {
  const uncheckTodo = ListTodo.filter(item => !item.checked);
  const uncheckedLenght = uncheckTodo.length;
  const data = ListTodo.map(item=>      
  <li key={item.id} className="d-flex justify-content-between align-items-center">
  <div className="form-check form-check-inline">
    <input className="form-check-input custom-checkbox" type="radio" id="exampleCheckbox" value="option1"/>
    <label className="form-check-label" for="exampleCheckbox">{item.task}</label>
  </div>
  <i className="delete-icon bi bi-x-circle"></i>
</li>);
    return (
        <main className="main d-flex justify-content-center">
        <div className="col-6">
         <ul>
             {data}
            <li className="d-flex main-footer justify-content-between align-items-center">
              <p className="text-white">{uncheckedLenght} items left</p>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn text-white">All</button>
                <button type="button" className="btn text-white">Active</button>
                <button type="button" className="btn text-white">Completed</button>
              </div>
              <button type="button" className="btn text-white">Clear Completed</button>
            </li>
      
         </ul>
          
        </div>
      </main>
    );
  } 