import Search from "./components/Search";
import ToDoList from "./components/ToDoList";
import "./App.css";

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
    </div>
  );
}

export default App;
