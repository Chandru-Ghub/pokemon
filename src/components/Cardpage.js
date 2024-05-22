import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Cardpage.css";
import pok from "../images/poki.png";
import like from "../images/like.png";
import disLike from "../images/dislike.png";

const Cardpage = () => {
  const [species, setSpecies] = useState("");
  const [myLike, setLike] = useState("");
  const [greet, setGreet] = useState(false);
  const [pick, setPick] = useState(false);
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [type, setType] = useState("");
  const [ability, setAbility] = useState([]);
  let id = Math.floor(Math.random(10) * 300);

  async function getEach() {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setData(res.data);
    setSpecies(res.data.species.name);
    setImg(res.data.sprites.other.dream_world.front_default);
    setImg2(res.data.sprites.other.showdown.front_default);
    setImg3(res.data.sprites.other.showdown.front_shiny);
    setImg4(res.data.sprites.front_shiny);
    setImg5(res.data.sprites.back_default);
    setType(res.data.types[0].type.name);
    setAbility(res.data.abilities);
  }
  // get pokemon by id
  useEffect(() => {
    getEach();
  }, []);

  // animation effect
  useEffect(() => {
    animi();
  }, []);

  function animi() {
    setTimeout(() => {
      setGreet(true);
    }, 3000);
  }

  // Set liked pokemons in local storage
  function liked(likes) {
    setLike(like);
    setPick(true);
    setTimeout(() => {
      setPick(false);
      getEach();
    }, 2000);

    let get = JSON.parse(localStorage.getItem("liked") || "[]");
    get.push(likes);
    localStorage.setItem("liked", JSON.stringify(get));
  }

  // Set Disliked pokemons in local storage
  function disLiked(dislike) {
    setLike(disLike);
    setPick(true);
    setTimeout(() => {
      setPick(false);
      getEach();
    }, 2000);
    let get = JSON.parse(localStorage.getItem("disliked") || "[]");
    get.push(dislike);
    localStorage.setItem("disliked", JSON.stringify(get));
  }
  return (
    <div className="main">
      <div className="mycard">
        <div className="img1 ">
          <img src={img} alt="" />
          <h2>{data.name}</h2>
        </div>
        <div className="section">
          <img className={pick ? "review" : "reviewhide"} src={myLike} alt="" />
          <div>
            <div className="sec1">
              <div className="id">#{data.id}</div>
              <p className="type">
                <span>type</span>:<p>{type}</p>
              </p>
              <p className="species">
                <span>Species </span>:<p>{species}</p>
              </p>
              <p className="species">
                <span>weight </span>:<p>{data.weight}</p>
              </p>
              <div className="power">
                <p>ABILITY</p>
                <ol>
                  {ability.map((a) => (
                    <li>{a.ability.name}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="btns">
              <button className="like" onClick={() => liked(data)}>
                👍 Like
              </button>
              <button className="dislike" onClick={() => disLiked(data)}>
                👎 Dislike
              </button>
            </div>
          </div>
          <div className="sec2">
            <div className="img2">
              <img src={img2} alt="" />
            </div>
            <div className="img3 img2">
              <img src={img3} alt="" />
            </div>
            <div className="img4">
              <img src={img4} alt="" />
            </div>
            <div className="img5">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={greet ? "pok" : "pokhide"}>
        <div className="msg">
          <span
            onClick={() => setGreet(false)}
            className="material-symbols-outlined close"
          >
            close
          </span>
          Welcome to the pokeSwipe
          <span> Like</span> or <span>Dislike </span>
          to continue the game
        </div>
        <img src={pok} alt="" />
      </div>
    </div>
  );
};

export default Cardpage;
