import React from "react";
import elephantIcon from "../styles/images/elephant.jpeg";

const Home = () => {
  return (
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <figure>
          <figcaption>Listen to the elephant</figcaption>
          <audio controls src="http://ring-nature.com/tones/elephant.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
        </figure>
        ;
        <img src={elephantIcon} alt="This is an elephant" />
        <div className="container has-text-centered">
          <p className="title">THE WILD LIST</p>
          <p className="subtitle">A list of endangered wildlife</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
