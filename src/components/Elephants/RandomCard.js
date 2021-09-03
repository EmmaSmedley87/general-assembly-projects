import React from "react";

const RandomCard = ({
  name,
  sex,
  affiliation,
  dob,
  image,
  note,
  species,
  wikilink,
}) => {
  return (
    // <div className="column">
    //   <div className="flip-card">
    //     <div className="flip-card-inner">
    //       <div className="flip-card-front">
    //         <div className="card-header">
    //           <h4 className="card-header-title is-centered">{name}</h4>
    //         </div>

    //         <div className="card-image">
    //           <figure className="image is-50by50">
    //             <img src={image} alt={name} width="50" height="50" />
    //           </figure>
    //         </div>
    //       </div>
    //       <div className="flip-card-back has-text-centered">
    //         <h2>Species: {species}</h2>
    //         <h2>Info: {note}</h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image is-50by50">
              <img src={image} alt={name} width="50" height="50" />
            </figure>
          </div>
          <div className="column is-half">
            <h2>
              <strong>Date of Birth</strong>:<br /> {dob}
            </h2>
            <hr />
            <h2>
              <strong>Gender</strong>:<br /> {sex}{" "}
            </h2>
            <hr />
            <h2>
              <strong>Species</strong>:<br /> {species}
            </h2>
            <hr />
            <h2>
              <strong>Affiliation</strong>:<br /> {affiliation}
            </h2>
            <hr />
            <h2>
              <strong>Note</strong>:<br /> {note}
            </h2>
            <hr />
            <h2>
              <strong>For more information</strong>:<br />{" "}
              <a href={wikilink} target="_blank" rel="noreferrer">
                {wikilink}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomCard;
