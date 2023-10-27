import { useState, useEffect } from "react";

function Search() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div className="container">
      <form action="/submit-url" method="post">
        <label className="label" htmlFor="fruits">
          Choose a Category:{" "}
        </label>
        <select name="fruits" id="fruits" className="select">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
          <option value="date">Date</option>
        </select>
      </form>
    </div>
  );
}

export default Search;
