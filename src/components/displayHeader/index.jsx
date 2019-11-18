import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { withPrefix } from "gatsby";

import TypeIndicator from "../typeIndicator";

import "./_index.scss";

const DisplayHeader = ({ selectedPokemon, handleItemClick }) => {
  return (
    <div className="displayHeader">
      <div className="displayHeader_inner">
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
                  src={withPrefix(
                    `/pokemon/${
                      pokemon.form
                        ? `${pokemon.id}-${pokemon.form}`
                        : pokemon.id
                    }.png`
                  )}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
                <TypeIndicator types={pokemon.types} />
              </div>
            );
          })}
      </div>
      <div className="displayHeader_inner">
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
                  src={withPrefix(
                    `/pokemon/${
                      pokemon.form
                        ? `${pokemon.id}-${pokemon.form}`
                        : pokemon.id
                    }.png`
                  )}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
                <TypeIndicator types={pokemon.types} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

DisplayHeader.displayName = "DisplayHeader";

DisplayHeader.propTypes = {};

DisplayHeader.defaultProps = {};

export default DisplayHeader;
