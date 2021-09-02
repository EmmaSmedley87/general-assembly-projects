import React from "react";
import { getRandomElephant } from "../../lib/api";

const RandomElephant = () => {
  const [state, setState] = React.useState("");

  const fetchRandomElephant = async () => {
    try {
      const response = await getRandomElephant();
      setState(response.data);
    } catch (error) {
      console.log("error fetching random elephant", error);
    }
  };

  React.useEffect(() => {
    fetchRandomElephant();
  });

  console.log(state);
  return <p>show me a random elephant!</p>;
};

export default RandomElephant;
