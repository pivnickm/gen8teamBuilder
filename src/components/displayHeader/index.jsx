import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./_index.scss";

const DisplayHeader = ({
  className,
  selectedPokemon,
  handleItemClick,
  ...displayHeaderProps
}) => {
  const outputClassName = cn(className, "displayHeader");

  return (
    <div className={outputClassName} {...displayHeaderProps}>
      {selectedPokemon.map((pokemon, index) => {
        return pokemon === null ? (
          <div className="displayHeader_item displayHeader_unselected">
            NULL
          </div>
        ) : (
          <div
            className="displayHeader_item"
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
            <div className={"displayHeader_typeWrapper"}>
              {pokemon.types.map(type => (
                <span
                  className={cn("displayHeader_type", `${type}0`)}
                  key={type}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

DisplayHeader.displayName = "DisplayHeader";

DisplayHeader.propTypes = {};

DisplayHeader.defaultProps = {};

export default DisplayHeader;
