import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./_index.scss";
import "./_sprites.scss";
import { withPrefix } from "gatsby";

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
    <div className="statTable_wrapper">
      {[
        { name: "Team Immunities", data: immunities },
        { name: "Team Weaknesses", data: superEffective },
        { name: "Team Resistances", data: resistances }
      ].map(defensiveMetric => (
        <table
          className={outputClassName}
          key={defensiveMetric.name}
          {...statTableProps}
        >
          <thead>
            <tr>
              <th colSpan="18">{defensiveMetric.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="statTable_col">
              {types.slice(0, types.length / 2).map(type => (
                <td className="statTable_cell" key={type}>
                  <div className={`sprite sprite-Icon_${type}`}>
                    <span className="statTable_typeText">{type}</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="statTable_col">
              {defensiveMetric.data
                .slice(0, defensiveMetric.data.length / 2)
                .map((count, index) => (
                  <td className="statTable_cell" key={index}>
                    <div
                      className={cn("statTable_cell_text", {
                        ["statTable_cell__caution"]: count > 2,
                        ["statTable_cell__warning"]: count > 3
                      })}
                    >
                      {count}
                    </div>
                  </td>
                ))}
            </tr>
            <tr className="statTable_col">
              {types.slice(types.length / 2, types.length).map(type => (
                <td className="statTable_cell" key={type}>
                  <div className={`sprite sprite-Icon_${type}`}>
                    <span className="statTable_typeText">{type}</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              {defensiveMetric.data
                .slice(
                  defensiveMetric.data.length / 2,
                  defensiveMetric.data.length
                )
                .map((count, index) => (
                  <td className="statTable_cell" key={index}>
                    <div
                      className={cn("statTable_cell_text", {
                        ["statTable_cell__caution"]: count > 2,
                        ["statTable_cell__warning"]: count > 3
                      })}
                    >
                      {count}
                    </div>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

StatTable.displayName = "StatTable";

StatTable.propTypes = {};

StatTable.defaultProps = {};

export default StatTable;
