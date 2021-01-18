import React from "react";

const Nominations = ({ nominationsList, removeNomination }) => {
  return (
    <div>
      <h3>Nominations:</h3>
      <ul className="ui big list">
        {nominationsList.map((nomination, index) => {
          return (
            <li key={index}>
              {nomination}{" "}
              <button
                onClick={(e) => {
                  removeNomination(index);
                }}
                className="mini ui button"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nominations;
