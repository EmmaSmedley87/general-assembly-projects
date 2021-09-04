import React from "react";
import elephantIcon from "../styles/images/elephant.jpeg";
import elephantClick from "../styles/images/elephantclick.jpeg";

const Home = () => {
  let audio = new Audio("http://ring-nature.com/tones/elephant.mp3");
  const start = () => {
    audio.play();
  };

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <img src={elephantIcon} alt="This is an elephant" />
          <div></div>
          {/* <img src={elephantClick} alt="This is an elephant" /> */}
        </div>
      </section>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <figure className="has-text-centered">
            <figcaption>Listen to the elephant</figcaption>
            {/* <button onClick={start}>Click here to play sound!</button> */}
            <div className="image is-128x128" onClick={start}>
              <img src={elephantClick} alt="This is an elephant" />
            </div>
            {/* <audio controls src="http://ring-nature.com/tones/elephant.mp3">
              Your browser does not support the <code>audio</code> element.
            </audio> */}
          </figure>
        </div>
      </section>
    </>
  );
};

export default Home;
