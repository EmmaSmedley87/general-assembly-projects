import React from 'react';

const ElephantSearch = ({ elephants = [] }) => {
  return (
    <>
      {elephants.map((data) => {
        if (data) {
          return (
            <div key={data._id}>
              <h1>{data.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default ElephantSearch;
