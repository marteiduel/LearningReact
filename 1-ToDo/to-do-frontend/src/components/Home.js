import Search from "./Search";
import ToDoList from "./ToDoList";

function Home() {
  return (
    <div>
      <header>
        <Search />
      </header>
      <main>
        <ToDoList />
      </main>
    </div>
  );
}

export default Home;
