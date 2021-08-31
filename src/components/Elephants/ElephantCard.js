import React from "react";

// this calls the specific data we want to show on all our animal cards
const ElephantCard = ({ _id, name, sex, affiliation, dob, image, note }) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>

        <div className="card-content">
          <h5>{note}</h5>
        </div>
      </div>
    </div>
  );
};

// name country

export default ElephantCard;
