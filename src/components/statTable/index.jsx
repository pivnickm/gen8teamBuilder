import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./_index.scss";

const StatTable = ({ className, allDefensiveStats, ...statTableProps }) => {
  const outputClassName = cn(className, "statTable");
  const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
  ];
  const immunities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const superEffective = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const resistances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  allDefensiveStats.forEach(pokemonDefenseList => {
    pokemonDefenseList.forEach((type, index) => {
      if (type > 1) {
        // 2, 4
        superEffective[index]++;
      } else if (type < 1 && type > 0) {
        // .5, .25
        resistances[index]++;
      } else if (type === 0) {
        // self explantiory...
        immunities[index]++;
      }
    });
  });
  return (
    <React.Fragment>
      {[
        { name: "Immunities", data: immunities },
        { name: "Super Effective", data: superEffective },
        { name: "Resistances", data: resistances }
      ].map(item => (
        <table className={outputClassName} {...statTableProps}>
          <th colspan="18">{item.name}</th>
          <tr className="statTable_col">
            {types.slice(0, types.length / 2).map(type => (
              <td className={`statTable_cell ${type.toLowerCase()}0`}>
                {type}
              </td>
            ))}
          </tr>
          <tr className="statTable_col">
            {item.data.slice(0, item.data.length / 2).map(type => (
              <td className="statTable_cell">{type}</td>
            ))}
          </tr>
          <tr className="statTable_col">
            {types.slice(types.length / 2, types.length).map(type => (
              <td className={`statTable_cell ${type.toLowerCase()}0`}>
                {type}
              </td>
            ))}
          </tr>
          <tr>
            {item.data
              .slice(item.data.length / 2, item.data.length)
              .map(type => (
                <td className="statTable_cell">{type}</td>
              ))}
          </tr>
        </table>
      ))}
    </React.Fragment>
  );
};

StatTable.displayName = "StatTable";

StatTable.propTypes = {};

StatTable.defaultProps = {};

export default StatTable;
