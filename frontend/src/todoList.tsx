import React, { useState } from 'react';
import './todoList.css';
import { Task } from './task';


function TodoList() {
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAdd = (text: string) => {
    if (text === '') {
      return;
    };

    setTasks([
      ...tasks,
      {
        id: Math.random() * 100000,
        text: text.trimStart(),
        isDone: false,
      }
    ]);
    setNewTaskText('');
  };

  const onDeleteClick = (taskId: number) => {
    setTasks(tasks.filter(task => task.id != taskId));
  };
  
  const onTaskToggle = (id: number, newStatus: boolean) => {
    const task = tasks.filter((task) => task.id === id)[0];
    task.isDone = newStatus;
    setTasks([...tasks]);
  };
  
  return (
    <div className="todo-container">
        <div className="title">ToDo List</div>
        <input type="text" onChange={(event) => setNewTaskText(event.target.value)} value={newTaskText} className="new-task-input"/>
        <button onClick={() => onAdd(newTaskText)} className="new-task-button">Add</button>
        <table className="todo-table">
          { tasks.sort((a, b) => (a.isDone ? 1 : 0) - (b.isDone ? 1 : 0)).map((task, ix) => {
            return (
              <tr key={task.id}>
                <td className="number-cell">{ix + 1}.&nbsp;</td>
                <td className={"text-cell" + (task.isDone ? " crossline-row" : "")}>{task.text}</td>
                <td className="checkbox-cell">
                  <input type="checkbox" checked={task.isDone} onChange={() => onTaskToggle(task.id, !task.isDone)} className="status-checkbox" />
                  <span className="checkbox-span"></span>
                </td>
                <td className="delete-cell"><button onClick={() => onDeleteClick(task.id)}>Delete</button></td>
              </tr>
            );
          }) }
        </table>
    </div>
  );
}

export default TodoList;
