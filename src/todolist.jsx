import React, { useState } from 'react';
import './to_do_list.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) return; // Can't move up the first item
    const updatedTasks = [...tasks];
    [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return; // Can't move down the last item
    const updatedTasks = [...tasks];
    [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={handleInputChange}
        placeholder="Ajouter une tâche"
      />
      <button onClick={addTask}>Ajouter</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button onClick={() => moveTaskUp(index)}>⬆</button>
              <button onClick={() => moveTaskDown(index)}>⬇</button>
              <button onClick={() => deleteTask(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
