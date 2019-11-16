import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import TypeIndicator from "../typeIndicator";

import "./_index.scss";

const DisplayHeader = ({
  className,
  selectedPokemon,
  handleItemClick,
  ...displayHeaderProps
}) => {
  const outputClassName = cn(className, "displayHeader");

  return (
    <React.Fragment>
      <div className={outputClassName} {...displayHeaderProps}>
        {selectedPokemon
          .slice(0, selectedPokemon.length / 2)
          .map((pokemon, index) => {
            return pokemon === null ? (
              <div className="displayHeader_item displayHeader_pokeball">
                <hr className="displayHeader_pokeballCenter" />
              </div>
            ) : (
              <div
                className="displayHeader_item displayHeader_pokeball"
                onClick={() => {
                  handleItemClick(index);
                }}
                key={index}
              >
                <img
                  className={"displayHeader_image"}
                  src={`/pokemon/${
                    pokemon.form ? `${pokemon.id}-${pokemon.form}` : pokemon.id
                  }.png`}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
                <TypeIndicator types={pokemon.types} />
              </div>
            );
          })}
      </div>
      <div className={outputClassName} {...displayHeaderProps}>
        {selectedPokemon
          .slice(selectedPokemon.length / 2, selectedPokemon.length)
          .map((pokemon, index) => {
            return pokemon === null ? (
              <div className="displayHeader_item displayHeader_pokeball">
                <hr className="displayHeader_pokeballCenter" />
              </div>
            ) : (
              <div
                className="displayHeader_item displayHeader_pokeball"
                onClick={() => {
                  handleItemClick(index);
                }}
                key={index}
              >
                <img
                  className={"displayHeader_image"}
                  src={`/pokemon/${
                    pokemon.form ? `${pokemon.id}-${pokemon.form}` : pokemon.id
                  }.png`}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
                <TypeIndicator types={pokemon.types} />
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

DisplayHeader.displayName = "DisplayHeader";

DisplayHeader.propTypes = {};

DisplayHeader.defaultProps = {};

export default DisplayHeader;
