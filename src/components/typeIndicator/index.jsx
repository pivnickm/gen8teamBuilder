import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./_index.scss";

const TypeIndicator = ({ types }) => {
  return (
    <div className={"typeIndicator"}>
      {types.map(type => (
        <span
          className={cn("typeIndicator_type", `${type.toLowerCase()}0`)}
          key={type}
        >
          {type}
        </span>
      ))}
    </div>
  );
};

TypeIndicator.displayName = "TypeIndicator";

TypeIndicator.propTypes = {};

TypeIndicator.defaultProps = {};

export default TypeIndicator;
