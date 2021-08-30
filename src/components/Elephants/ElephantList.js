import React from "react";
import { getAllElephants } from "../../lib/api";

const ElephantList = () => {
  const [state, setState] = React.useState({ elephants: [] });

  const fetchAllElephantsFromApi = async () => {
    try {
      const response = await getAllElephants();
      setState({ elephants: response.data });
    } catch (error) {
      console.error("error occured fetching all elephants", error);
    }
  };

  React.useEffect(() => {
    fetchAllElephantsFromApi();
  }, []);

  console.log(state);

  return <p>Some Text</p>;
};

export default ElephantList;
