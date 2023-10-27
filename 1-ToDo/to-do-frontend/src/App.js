import Search from "./components/Search";
import ToDoList from "./components/ToDoList";
import "./App.scss";
import AddCategory from "./components/AddCategory";

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do App</h1>
        <Search />
      </header>
      <main>
        <ToDoList />
      </main>
      <footer>
        <AddCategory />
      </footer>
    </div>
  );
}

export default App;
