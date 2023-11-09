import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy apples",
      completed: false,
    },
    { id: 2, text: "Wash car", completed: false },
    { id: 3, text: "Go to the gym", completed: false },
  ]);

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <section className="ToDoTable">
      <h2>My To Do List</h2>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className={`task`}>
            <span
              className={`task ${task.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>

            <div className="buttonsSide">
              <button
                className={`task ${
                  task.completed ? "unCompleteButton" : "completeButton"
                }`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? "Un-Do" : "Complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToDoList;
