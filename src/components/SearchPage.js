import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ElephantSearchResults from "./Elephants/ElephantSearchResults";
import { getAllElephants } from "../lib/api";
import ElephantButton from "../styles/images/elephantclickbutton.png";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [allElephants, setAllElephants] = useState([]);
  const [filterResults, setFilterResults] = useState([]);

  const fetchData = async () => {
    const elephants = await getAllElephants();
    // eslint-disable-next-line array-callback-return
    const elephantsWithNames = elephants.data.filter((elephant) => {
      if (elephant.name && elephant.species) {
        return elephant;
      }
    });
    setAllElephants(elephantsWithNames);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const filteredElephants = allElephants.filter((elephant) =>
      elephant.name.includes(e.target.value)
    );
    setFilterResults(filteredElephants);
    setInput(e.target.value);
  };

  return (
    <React.Fragment>
      <h1>Elephant Search</h1>
      <img
        src="../styles/images/elephantclickbutton.png"
        alt="this is an elephant icon"
      />
      <SearchBar keyword={input} setKeyword={handleChange} />
      <ElephantSearchResults elephants={filterResults} />
    </React.Fragment>
  );
};

export default SearchPage;
