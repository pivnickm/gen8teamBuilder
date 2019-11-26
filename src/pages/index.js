import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import List from "../components/list";
import DisplayHeader from "../components/displayHeader";
import StatTable from "../components/statTable";
import SEO from "../components/seo";

import data from "../data/galarPokedex.json";

const IndexPage = ({ location }) => {
  const [term, setSearchTerm] = useState("");
  const [counter, setCounter] = useState(0);
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

  useEffect(() => {
    if (location.hash) {
      const seedData = location.hash.replace("#", "").split(",");
      handleSelectPokemon(
        seedData
          .map(seedItem =>
            data.find(
              item =>
                item.name.toLowerCase() === decodeURI(seedItem).toLowerCase()
            )
          )
          .filter(seedItem => seedItem !== undefined)
      );
    }
  }, []);

  const handleSelectPokemon = pokemonToAdd => {
    const newArr = selectedPokemon.slice();
    // if it's an array (multiple at once)
    // use only the first 6, and add each to their respective index
    // update the count to reflect the newly added
    if (Array.isArray(pokemonToAdd)) {
      const trimmedList = pokemonToAdd.slice(0, 6);
      trimmedList.forEach((pokemon, index) => {
        newArr[index] = pokemon;
      });

      setCounter(counter + trimmedList.length);
      // if it's just a single pokemon, if the count is less than 6,
      // add it to the appropriate index
      // otherwise, remove the first item, and add the new to the end
    } else {
      if (counter < 6) {
        newArr[counter] = pokemonToAdd;
      } else {
        if (newArr.some(pokemon => pokemon === null)) {
          let nearestIndex = newArr.findIndex(pokemon => pokemon === null);
          newArr[nearestIndex] = pokemonToAdd;
        } else {
          newArr.shift();
          newArr[5] = pokemonToAdd;
        }
      }

      setNavigation(
        newArr.reduce((acc, val) => {
          if (val !== null) {
            acc.push(val.name);
          }
          return acc;
        }, [])
      );
      setCounter(counter + 1);
    }
    // set these all at once because set seems to be async like setState
    setSelectedPokemon(newArr);
  };

  const setNavigation = pokemon => {
    // navigate(withPrefix(`/#${pokemon}`));
    if (window.history.pushState) {
      window.history.pushState(null, null, `#${pokemon}`);
    } else {
      location.hash = `#${pokemon}`;
    }
  };

  const handleRemovePokemon = indexToRemove => {
    const newArr = [
      ...selectedPokemon.slice(0, indexToRemove),
      ...selectedPokemon.slice(indexToRemove + 1, selectedPokemon.length),
      null
    ];

    setNavigation(
      newArr.reduce((acc, val) => {
        if (val !== null) {
          acc.push(val.name);
        }
        return acc;
      }, [])
    );
    setSelectedPokemon(newArr);
  };

  // const handleFilterGen = gen => {
  //   console.log(gen); // eslint-disable-line
  //   const index = filteredData.findIndex(gen);
  //   if (index > -1) {
  //     setFilteredData([
  //       filteredData.slice(0, index),
  //       filteredData.slice(index + 1, filteredData.length)
  //     ]);
  //   } else {
  //     filteredData.push();
  //   }
  // };

  const filteredList = filteredData
    .filter(pokemon => !selectedPokemon.includes(pokemon))
    .filter(pokemon =>
      pokemon.name.toLowerCase().startsWith(term.toLowerCase())
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
    <Layout onChange={event => setSearchTerm(event.target.value)}>
      <SEO title="Pokemon Sword and Shield Team Builder" />
      <div style={{ display: "flex" }}>
        <DisplayHeader
          selectedPokemon={selectedPokemon}
          handleItemClick={handleRemovePokemon}
        />
        {/* {generations.map((gen, index) => (
              <button onClick={() => handleFilterGen(gen)}>
              {gen === 0 ? "All" : `Gen ${gen}`}
              </button>
            ))} */}

        <div>
          <StatTable allDefensiveStats={allDefensiveStats} />
          <List
            availablePokemon={filteredList}
            handleItemClick={handleSelectPokemon}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
