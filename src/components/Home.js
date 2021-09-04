import React from "react";
import elephantIcon from "../styles/images/elephant.jpeg";

const Home = () => {
  const elephantSound = () => {
    function playAudio() {
      let audio = new Audio("http://ring-nature.com/tones/elephant.mp3");

      const start = () => {
        audio.play();
      };

      return (
        <div>
          <button onClick={start}>Play</button>
        </div>
      );
    }

    playAudio();
  };

  return (
    <section className="hero is-fullheight is-success">
      <div className="hero-body">
        {/* <figure>
          <figcaption>Listen to the elephant</figcaption>
          <audio controls src="http://ring-nature.com/tones/elephant.mp3">
          Your browser does not support the <code>audio</code> element.
          <img src=""
        </audio> */}
        {/* </figure> */}
        elephantSound
        <img src={elephantIcon} alt="This is an elephant" />
        <div className="container has-text-centered">
          <p className="title">THE ELEPHANT LIST</p>
          <p className="subtitle">A list of elephants!</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
