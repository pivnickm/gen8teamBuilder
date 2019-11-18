import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import List from "../components/list";
import DisplayHeader from "../components/displayHeader";
import StatTable from "../components/statTable";
import SEO from "../components/seo";

import data from "../data/galarPokedex.json";

const IndexPage = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const generations = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleSelectPokemon = pokemonToAdd => {
    const newArr = selectedPokemon.slice();
    newArr.unshift(pokemonToAdd);
    newArr.pop();

    setSelectedPokemon(newArr);
  };

  const handleRemovePokemon = indexToRemove => {
    setSelectedPokemon([
      ...selectedPokemon.slice(0, indexToRemove),
      ...selectedPokemon.slice(indexToRemove + 1, selectedPokemon.length),
      null
    ]);
  };

  const handleFilterGen = gen => {
    console.log(gen); // eslint-disable-line
    const index = filteredData.findIndex(gen);
    if (index > -1) {
      setFilteredData([
        filteredData.slice(0, index),
        filteredData.slice(index + 1, filteredData.length)
      ]);
    } else {
      filteredData.push();
    }
  };

  const filteredList = filteredData.filter(
    pokemon => !selectedPokemon.includes(pokemon)
  );
  const allDefensiveStats = selectedPokemon.map(pokemon => {
    if (pokemon !== null) {
      return pokemon.defensives;
    } else {
      return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ];
    }
  });
  return (
    <Layout>
      <SEO title="Pokemon Sword and Shield Team Builder" />

      <div>
        <DisplayHeader
          selectedPokemon={selectedPokemon}
          handleItemClick={handleRemovePokemon}
        />
        {/* {generations.map((gen, index) => (
          <button onClick={() => handleFilterGen(gen)}>
            {gen === 0 ? "All" : `Gen ${gen}`}
          </button>
        ))} */}
        <StatTable allDefensiveStats={allDefensiveStats} />
        <List
          availablePokemon={filteredList}
          handleItemClick={handleSelectPokemon}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
