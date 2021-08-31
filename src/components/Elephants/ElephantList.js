import React from "react";
import { getAllElephants } from "../../lib/api";
import ElephantCard from "./ElephantCard";

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

  return (
    <section className="section">
      <div className="container">
        {state.elephants.map((elephant) => (
          <ElephantCard
            key={elephant._id}
            _id={elephant._id}
            name={elephant.name}
            fact={elephant.note}
            image={elephant.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ElephantList;
