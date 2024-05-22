import React, { useEffect, useState } from "react";
import Pokemons from "./Pokemons";
import "../styles/Liked.css";
import bub from "../images/drg.png";
const LikedAndUnliked = () => {
  const [liked, setLiked] = useState([]);
  const [disLiked, setDisLiked] = useState([]);
  const [greet, setGreet] = useState(true);

  // get liked and disliked pokemon from local storage

  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("liked")));
    setDisLiked(JSON.parse(localStorage.getItem("disliked")));
  }, []);

  // create animation effect

  useEffect(() => {
    animi();
  }, []);

  function animi() {
    setTimeout(() => {
      setGreet(false);
    }, 2000);
  }
  return (
    <div className="likedPokemons">
      <div className={greet ? "bubhide" : "bub"}>
        <div className="msg">
          <span
            onClick={() => setGreet(true)}
            className="material-symbols-outlined close"
          >
            close
          </span>
          collection of characters which you liked and disliked
        </div>
        <img src={bub} alt="" />
      </div>

      <div className="left">
        <h1>👍 Liked</h1>
        {liked ? (
          <div className="likedlist">
            <div className="counters">#{liked.length}</div>
            {liked.map((pokemon) => (
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
        ) : (
          <div className="info">Give your first like</div>
        )}
      </div>

      <div className="right">
        <h1> 👎DisLiked</h1>
        {disLiked ? (
          <div className="dislikedlist">
            <div className="counters2">#{disLiked.length}</div>
            {disLiked.map((pokemon) => (
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
        ) : (
          <div className="info">You liked all the pokemon</div>
        )}
      </div>
    </div>
  );
};

export default LikedAndUnliked;
