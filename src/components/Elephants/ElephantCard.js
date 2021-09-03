import React from "react";
import { UpdownButton } from "@lyket/react";

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
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-header">
              <h4 className="card-header-title is-centered">{name}</h4>
            </div>

            <div className="card-image">
              <figure className="image is-1by1">
                <img src={image} alt={name} width="200" height="200" />
              </figure>
            </div>
          </div>
          <div className="flip-card-back">
            <h2>Species: {species}</h2>
            <h2>Info: {note}</h2>
            <div className="is-centered">
              <UpdownButton
                id="do-you-like-elephants"
                namespace="elephant-card"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElephantCard;
