import React, { useState } from "react";

function Search({ onSearch }) {

  const [query, setQuery] = useState('');

  function handleQuery(e) {
    e.preventDefault() 

    onSearch(query)
  }

  return (
    <nav className="search">
      <input value={query} onChange={ e => setQuery(e.target.value)}></input>
      <button className="schbtn" type="submit" onClick={e => handleQuery(e)}>Search</button>
    </nav>
  );
}

export default Search;