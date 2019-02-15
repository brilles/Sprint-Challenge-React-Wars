import React from "react";
import "./StarWarsChars.css";
const StarWarsChars = props => {
  // const entries = Object.entries(props.character);
  return (
    <div className="character">
      <h2 className="name">{props.character.name}</h2>
      <img src={props.character.url} alt={`img of ${props.character.name}`} />
      {/* <img src={props.character.url} alt="" /> */}
      {/* 1. Gets the entries => keys and values of the starwars character
          through props. 2. Trims the front and truncates via .slice() 3. assigns
          key to index with +1000 for styling purposes. 4. For each key, it replaces
          the undescore with a space with REGEX. 5. Assigns the key : value to p tag
          for each character. The reason for the .slice() instead of traversing the
          whole preserved array is bc of the img edge case. 1 hour left to style
    this. If more time, this case would be added to the map traverse. */}
      {Object.entries(props.character)
        .slice(1, -8)
        .map((character, index) => (
          <p key={index + 1000}>
            {character[0].charAt(0).toUpperCase() +
              character[0].slice(1).replace(/_/gi, " ")}
            : {character[1]}
          </p>
        ))}
    </div>
  );
};

export default StarWarsChars;
