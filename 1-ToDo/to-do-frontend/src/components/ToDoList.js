import React from "react";

function ToDoList() {
  return (
    <section className="ToDoTable">
      <h2>My To Do List</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Buy groceries</td>
            <td>no</td>
          </tr>
          <tr>
            <td>Wash car</td>
            <td>no</td>
          </tr>
          <tr>
            <td>Go to the gym</td>
            <td>no</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ToDoList;
