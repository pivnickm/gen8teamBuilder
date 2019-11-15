import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import ListItem from "./item";

import "./_index.scss";

const List = ({
  className,
  handleItemClick,
  availablePokemon,
  ...listProps
}) => {
  const outputClassName = cn(className, "list");

  return (
    <ul className={outputClassName} {...listProps}>
      {availablePokemon.map((pokemon, index) => (
        <ListItem
          key={`${pokemon.name}`}
          pokemon={pokemon}
          onClick={handleItemClick}
        />
      ))}
    </ul>
  );
};

List.displayName = "List";

List.propTypes = {};

List.defaultProps = {};

export default List;
