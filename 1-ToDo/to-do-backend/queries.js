const queries = {
  getAllTodos: "SELECT * FROM ToDoItems",

  getTodoById: "SELECT * FROM ToDoItems WHERE id = ?",

  createTodo: "INSERT INTO ToDoItems (Title, Text, Completed) VALUES (?, ?, ?)",

  updateTodo:
    "UPDATE ToDoItems SET Title = ?, Text = ?, Completed = ? WHERE id = ?",

  deleteTodo: "DELETE FROM ToDoItems WHERE id = ?",

  getAllCategories: "SELECT * FROM Categories",

  deleteCategory: "DELETE FROM Categories WHERE id = ?",
};

module.exports = queries;
