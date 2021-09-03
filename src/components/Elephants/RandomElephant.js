import React from "react";
import { getRandomElephant } from "../../lib/api";
import RandomCard from "./RandomCard";

const RandomElephant = () => {
  const [state, setState] = React.useState({ elephants: [] });

  const fetchRandomElephantApi = async () => {
    try {
      const response = await getRandomElephant();
      setState({ elephants: response.data });
    } catch (error) {
      console.error("error occured fetching all elephants", error);
    }
  };

  React.useEffect(() => {
    fetchRandomElephantApi();
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="card is-128by128 is-centered">
            {state.elephants.map((elephant) => (
              <RandomCard
                key={elephant._id}
                _id={elephant._id}
                name={elephant.name}
                note={elephant.note}
                image={elephant.image}
                species={elephant.species}
                wikilink={elephant.wikilink}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="card">
              <p>Random elephant 1</p>
            </div>
            <div className="card">
              <p>Random elephant 2</p>
            </div>
            <div className="card">
              <p>Random elephant 3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RandomElephant;
