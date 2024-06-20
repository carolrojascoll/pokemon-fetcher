//CAROLINA ROJAS COLLANTE
import React, { useState } from 'react';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`);
      const data = await response.json();
      setPokemonNames(data.results.map(pokemon => pokemon.name));
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Pokemon'}
      </button>
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
