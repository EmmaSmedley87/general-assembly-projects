import React from "react";
import elephantIcon from "../styles/images/elephant.jpeg";

const Home = () => {
  return (
    <section className="hero is-fullheight is-success">
      <div className="hero-body">
        {/* <figure>
          <figcaption>Listen to the elephant</figcaption>
          <audio controls src="http://ring-nature.com/tones/elephant.mp3">
            Your browser does not support the <code>audio</code> element.
            <img src=""
          </audio> */}
        <div>on click</div>
        {/* </figure> */}
        ;
        <img src={elephantIcon} alt="This is an elephant" />
        <div className="container has-text-centered">
          <p className="title">THE ELEPHANT LIST</p>
          <p className="subtitle">A list of elephants!</p>
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <img src={elephantIcon} alt="This is an elephant" />
        </div>
      </section>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <figure className="has-text-centered">
            <figcaption>Listen to the elephant</figcaption>
            <audio controls src="http://ring-nature.com/tones/elephant.mp3">
              Your browser does not support the <code>audio</code> element.
            </audio>
          </figure>
        </div>
      </section>
    </>

    // <section className="hero is-fullheight is-light">
    //   <div className="hero-body">
    //     <img src={elephantIcon} alt="This is an elephant" />
    //     <br  />
    //     <figure>
    //       <figcaption>Listen to the elephant</figcaption>
    //       <audio controls src="http://ring-nature.com/tones/elephant.mp3">
    //         Your browser does not support the <code>audio</code> element.
    //       </audio>
    //     </figure>
    //   </div>
    // </section>
  );
};

export default Home;
