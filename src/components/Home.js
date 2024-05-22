import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemons from "./Pokemons";
import logo from "../images/logo.png";
import egg from "../images/egg.png";
import bub from "../images/bug.png";
const Home = () => {

  let [data, setData] = useState([]);
  const [greet, setGreet] = useState(true);
  let [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10");
  

  async function getpokemon() {
    let res = await axios(url);
    setUrl(res.data.next);

    async function getEach(result) {
      result.forEach(async (a) => {
        let res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${a.name}`
        );
        setData((current) => [...current, res.data]);
      });
    }
    getEach(res.data.results);
  }

  // get pokemon by name
  useEffect(() => {
    getpokemon();
  }, []);

  // animation effect 
  useEffect(() => {
    animi();
  }, []);

  function animi() {
    setTimeout(() => {
      setGreet(false);
    }, 2000);
  }

  return (
    <div className="container">
      <div className="pokilogo">
        <img src={logo} alt="" />
      </div>
      <div className={greet ? "bubhide" : "bub"}>
        <div className="msg">
          <span
            onClick={() => setGreet(true)}
            className="material-symbols-outlined close"
          >
            close
          </span>
          You can find 100s of pokemon characters here to see more click load
          more option!!
        </div>
        <img src={bub} alt="" />
      </div>
      <div className="collection">
        {data.map((pokemon) => (
          <Pokemons
            img2={pokemon.sprites.other.showdown.front_default}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types}
            ability={pokemon.abilities}
          />
        ))}
      </div>
      <div className="load">
        <button onClick={() => getpokemon()}>
          Load More
          <img src={egg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
