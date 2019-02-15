import React from "react";
import StarWarsChars from "./StarWarsChars";

const DisplayChars = props => {
  return (
    <div className="characters">
      {props.starwarsChars.map((character, index) => (
        <StarWarsChars key={index} character={character} />
      ))}
    </div>
  );
};

export default DisplayChars;
