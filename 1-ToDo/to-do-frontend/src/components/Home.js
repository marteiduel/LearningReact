// import CategoriesHomePage from "./CategoriesHomePage";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

function Home() {
  return (
    <div>
      <header>
        <AddToDo />
      </header>
      <main>
        <ToDoList />
      </main>
    </div>
  );
}

export default Home;
