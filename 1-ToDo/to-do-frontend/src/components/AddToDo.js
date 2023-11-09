import React from "react";

function AddToDo() {
  return (
    <div className="add-todo-container">
      <h2>To-Do App</h2>
      <form>
        <input type="text" id="text" placeholder="Enter a new To-Do" />
        <button type="submit">Add To-Do</button>
      </form>
    </div>
  );
}

export default AddToDo;
