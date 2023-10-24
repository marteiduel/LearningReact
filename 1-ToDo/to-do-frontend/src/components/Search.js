import React from "react";

function Search() {
  return (
    <div>
      <form action="/submit-url" method="post">
        <label for="fruits">Choose a fruit:</label>
        <select name="fruits" id="fruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
          <option value="date">Date</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;
