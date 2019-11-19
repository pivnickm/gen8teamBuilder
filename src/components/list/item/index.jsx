import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { withPrefix } from "gatsby";

import * as colors from "../../../data/colors";
import "./_index.scss";

const ListItem = ({ className, onClick, pokemon }) => {
  const outputClassName = cn(
    className,
    "listItem",
    pokemon.types
      .map((type, index) => `${type.toLowerCase()}${index}`)
      .join(" ")
  );
  const imageClassName = cn(className, "listItem_image");
  const imagePath = pokemon.form ? `${pokemon.id}-${pokemon.form}` : pokemon.id;

  return (
    <li
      className={outputClassName}
      onClick={() => {
        onClick(pokemon);
      }}
    >
      <img
        className={imageClassName}
        src={withPrefix(`/pokemon/${imagePath}.png`)}
        alt={pokemon.name}
      />
    </li>
  );
};

ListItem.displayName = "ListItem";

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
