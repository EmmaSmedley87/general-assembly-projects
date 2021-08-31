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

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
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
      </div>
    </section>
  );
};

export default ElephantList;
