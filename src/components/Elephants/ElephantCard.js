import React from "react";

// this calls the specific data we want to show on all our animal cards
const ElephantCard = ({
  _id,
  name,
  sex,
  affiliation,
  dob,
  image,
  note,
  species,
}) => {
  console.log({
    _id,

    sex,
    affiliation,
    dob,

    note,
    species,
  });
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <div className="card-header">
              <h4 className="card-header-title is-centered">{name}</h4>
            </div>

            <div className="card-image">
              <figure className="image is-1by1">
                <img src={image} alt={name} width="200" height="200" />
              </figure>
            </div>
          </div>
          <div className="card-back">
            <h1>{name}</h1>
            <h2>Species: {species}</h2>
            <h2>Info: {note}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

// name country

export default ElephantCard;
