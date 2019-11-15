import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import List from "../components/list";
import DisplayHeader from "../components/displayHeader";
import SEO from "../components/seo";

import data from "../data/pokedex.json";

const IndexPage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null
  ]);

  const handleSelectPokemon = pokemonToAdd => {
    selectedPokemon.shift();
    setSelectedPokemon([...selectedPokemon, pokemonToAdd]);
  };

  const handleRemovePokemon = indexToRemove => {
    setSelectedPokemon([
      ...selectedPokemon.slice(0, indexToRemove),
      ...selectedPokemon.slice(indexToRemove + 1, selectedPokemon.length),
      null
    ]);
  };

  const filteredList = data.filter(
    pokemon => !selectedPokemon.includes(pokemon)
  );
  return (
    <Layout>
      <SEO title="Pokemon Sword and Shield Team Builder" />

      <div>
        <DisplayHeader
          selectedPokemon={selectedPokemon}
          handleItemClick={handleRemovePokemon}
        />
        <List
          availablePokemon={filteredList}
          handleItemClick={handleSelectPokemon}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
