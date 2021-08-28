import React from "react";
import { getAllAnimals } from "../../lib/api";

const AnimalList = () => {
  const [state, setState] = React.useState({ animals: [] });

  const fetchAnimalsFromApi = async () => {
    try {
      const res = await getAllAnimals();
      setState({ animals: res.data });
    } catch (err) {
      console.error("An error occured fetching all animals", err);
    }
  };

  React.useEffect(() => {
    fetchAnimalsFromApi();
  }, []);

  console.log(state);

  return <p>Some Text</p>;
};

export default AnimalList;
