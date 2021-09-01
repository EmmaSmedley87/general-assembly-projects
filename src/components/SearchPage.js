import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [ElephantSearchDefault, setElephantSearchDefault] = useState();
  const [ElephantSearch, setElephantSearch] = useState();

  const fetchData = async () => {
    return await fetch(
      '"https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants'
    )
      .then((response) => response.json())
      .then((data) => {
        setElephantSearch(data);
        setElephantSearchDefault(data);
      });
  };

  const updateInput = async (input) => {
    const filtered = ElephantSearchDefault.filter((country) => {
      return country.nametoLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setElephantSearchDefault(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Elephant Search</h1>
      <SearchBar input={input} onChange={updateInput} />
      <ElephantSearch elephantSearch={ElephantSearch} />
    </>
  );
};

export default SearchPage;
