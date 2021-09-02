import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ElephantSearch from "./Elephants/ElephantSearch";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [elephantSearch, setElephantSearch] = useState("");

  const fetchData = async () => {
    return await fetch(
      '"https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants'
    )
      .then((response) => response.json())
      .then((data) => {
        setElephantSearch(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    console.log(e);
    setInput(e.target.value);
  };

  console.log(elephantSearch);

  return (
    <React.Fragment>
      <h1>Elephant Search</h1>
      <SearchBar keyword={input} setKeyword={handleChange} />
      <ElephantSearch elephantSearch={ElephantSearch} />
    </React.Fragment>
  );
};

export default SearchPage;
