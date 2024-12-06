import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";
import logo from "../assets/Pokemon-logo.svg";
import { PokemonLoading } from "./PokemonLoading";
export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        // console.log(curPokemon.url);
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
        // console.log(data);
      });
      //   console.log(detailedPokemonData);
      //Promises mil rhe the in the next line of code
      // we get an actual data by using Promise.all//

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //Search-fucntionality//
  // const searchData = pokemon.filter((curPokemon) =>
  //   curPokemon.name.toLowerCase().includes(search.toLowerCase())
  // );

  //Category functionaliy//
  const filteredPokemon = pokemon.filter((curPokemon) => {
    const matchesSearch = curPokemon.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      curPokemon.types.some((type) => type.type.name === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div>
        <PokemonLoading />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        {/* <h1 className="poke-head">Pokêmon Cards</h1> */}
        <div className="Pokemon-logo">
          <img src={logo} alt="Pokemon-logo" />
        </div>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="search-Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="pokemon-category">
        <button
          className={`category-button category-grass`}
          onClick={() => setSelectedCategory("grass")}
        >
          Grass
        </button>
        <button
          className={`category-button category-water`}
          onClick={() => setSelectedCategory("water")}
        >
          Water
        </button>
        <button
          className={`category-button category-fire`}
          onClick={() => setSelectedCategory("fire")}
        >
          Fire
        </button>
        <button
          className={`category-button category-all`}
          onClick={() => setSelectedCategory("")}
        >
          All
        </button>
      </div>
      <div>
        <ul className="cards">
          {filteredPokemon.map((curPokemon) => {
            return (
              <>
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                {isVisible && (
                  <div className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                  </div>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
